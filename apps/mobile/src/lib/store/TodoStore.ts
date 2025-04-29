import { makeAutoObservable, observable, reaction, runInAction } from 'mobx';
import { computedFn } from 'mobx-utils';

import { sleep } from '@jshare/common';

class TodoStore {
    todos: TodoObject[] = [];
    isLoading: boolean = false;
    find: (id: string) => TodoObject | undefined;

    constructor() {
        this.find = computedFn((id: string) => {
            console.log('RUNNING FIND!!');
            return this.todos.find((t) => t.id === id);
        });
        makeAutoObservable(this);
        this.pull();
    }

    pull() {
        this.isLoading = true;
        loadTodos()
            .then((data) => {
                runInAction(() => {
                    data.forEach((todo) => this.updateFromServer(todo));
                });
            })
            .finally(() => {
                this.isLoading = false;
            });
    }

    updateFromServer(item: TodoData) {
        let todo = this.todos.find((t) => t.id === item.id);
        if (!todo) {
            todo = new TodoObject(this, item);
            this.todos.push(todo);
        } else {
            todo.updateFromServer(item);
        }
    }

    create(data: TodoData) {
        console.log('INSERTING TODO');
        insertTodo(data).then(() => {
            console.log('INSERTED TODO');
            runInAction(() => {
                this.updateFromServer(data);
            });
        });
    }

    delete(id: string) {
        const index = this.todos.findIndex((t) => t.id === id);
        const [todo] = this.todos.splice(index, 1);
        const json = todo.snapshot;
        deleteTodo(id)
            .then(() => {
                todo.dispose();
            })
            .catch((error) => {
                console.log('Delete error', error);
                /**
                 * Restore deleted document on failure
                 */
                runInAction(() => {
                    this.updateFromServer(json);
                });
            });
    }

    save(id: string, data: TodoData) {
        saveTodo(id, data);
    }
}

export class TodoObject {
    id: string; // Unique id of this Todo, immutable.
    data: TodoData;
    store: TodoStore;
    autoSave = true; // Indicator for submitting changes in this Todo to the server.
    disposeSaveHandler: any; // Disposer of the side effect auto-saving this Todo (dispose).

    constructor(store: TodoStore, data: TodoData) {
        this.store = store;
        this.id = data.id;
        this.data = data;

        this.disposeSaveHandler = reaction(
            () => this.snapshot, // Observe everything that is used in the JSON.
            (json) => {
                console.log('HELLO FROM SAVE HANDLER');
                // If autoSave is true, send JSON to the server.
                if (this.autoSave) {
                    this.store.save(this.id, json);
                }
            }
        );

        makeAutoObservable(this, {
            id: false,
            store: false,
            autoSave: false,
            disposeSaveHandler: false,
            dispose: false,
        });
    }

    // Get a non-reactive snapshot of the Todo data
    get snapshot() {
        return {
            ...this.data,
        };
    }

    delete() {
        this.store.delete(this.id);
    }

    // Update this Todo with information from the server.
    updateFromServer(data: TodoData) {
        this.autoSave = false;
        this.data = data;
        this.autoSave = true;
    }

    update(updates: Partial<TodoData>) {
        this.data = {
            ...this.data,
            ...updates,
        };
    }

    // Clean up the observer.
    dispose() {
        this.disposeSaveHandler();
    }
}

type TodoData = {
    id: string;
    label: string;
    updatedAt: Date;
};

let todosData: TodoData[] = [
    {
        id: 'TODO-123',
        label: 'First todo',
        updatedAt: new Date(),
    },
    {
        id: 'TODO-456',
        label: 'Another todo',
        updatedAt: new Date(),
    },
];

const loadTodos = async (): Promise<TodoData[]> => {
    await sleep(1000);
    return [...todosData];
};

const deleteTodo = async (id: string) => {
    await sleep(1000);
    todosData = todosData.filter((item) => item.id !== id);
};

const saveTodo = async (id: string, data: TodoData) => {
    await sleep(1000);
    todosData = todosData.map((t) => {
        if (t.id === id) {
            return {
                ...data,
                updatedAt: new Date(),
            };
        }
        return t;
    });
};

const insertTodo = async (data: TodoData) => {
    // await sleep(1000);
    todosData.push(data);
};

export const todoStore = new TodoStore();
