import { ExpensesStore } from '~/lib/store/collections/expenses';
import { GroupsStore } from '~/lib/store/collections/groups';
import { MessagesStore } from '~/lib/store/collections/messages';
import { PaymentsStore } from '~/lib/store/collections/payments';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import type { Document } from '~/lib/store/Document';
import type { DocumentStore } from '~/lib/store/DocumentStore';
import { PreferencesStore } from '~/lib/store/PreferencesStore';

export const Store = {
    profiles: ProfilesStore,
    groups: GroupsStore,
    messages: MessagesStore,
    expenses: ExpensesStore,
    payments: PaymentsStore,
} satisfies Record<string, DocumentStore<any, any, any, any, any>>;

export namespace Docs {
    export type Group = Document<typeof GroupsStore>;
    export type Message = Document<typeof MessagesStore>;
    export type Expense = Document<typeof ExpensesStore>;
    export type Payment = Document<typeof PaymentsStore>;
    export type Profile = Document<typeof ProfilesStore>;
}

export const resetStores = async () => {
    await Promise.all(Object.values(Store).map((store) => store.reset()));
    PreferencesStore.reset();
};
