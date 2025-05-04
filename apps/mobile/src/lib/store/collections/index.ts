import { GroupParticipantsStore } from '~/lib/store/collections/groupParticipants';
import { GroupsStore } from '~/lib/store/collections/groups';
import { ImagesStore } from '~/lib/store/collections/images';
import { MessagesStore } from '~/lib/store/collections/messages';
import { ProfilesStore } from '~/lib/store/collections/profiles';
import type { Document } from '~/lib/store/Document';
import type { DocumentStore } from '~/lib/store/DocumentStore';

export const Store = {
    profiles: ProfilesStore,
    images: ImagesStore,
    groups: GroupsStore,
    groupParticipants: GroupParticipantsStore,
    messages: MessagesStore,
} satisfies Record<string, DocumentStore<any, any, any>>;

export namespace Docs {
    export type InferDocType<TStore extends DocumentStore<any, any, any>> =
        TStore extends DocumentStore<infer T, infer R, infer I> ? Document<T, R, I> : never;

    export type Group = InferDocType<typeof GroupsStore>;
    export type Message = InferDocType<typeof MessagesStore>;
}

export const storeIsReady = async () => {
    await Promise.all(Object.values(Store).map((store) => store.isReady));
};

export const resetStore = () => {
    Object.values(Store).forEach((store) => store.reset());
};
