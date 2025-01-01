import { v4 as uuidv4 } from 'uuid';

export abstract class Mocker<T> {
    abstract build(partial?: Partial<T>): T;

    getId(): string {
        return uuidv4();
    }
}
