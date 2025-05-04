import { router } from '../../trpc';
import { groupParticipantsRouter } from './groupParticipants';
import { groupsRouter } from './groups';
import { imagesRouter } from './images';
import { messagesRouter } from './messages';
import { profilesRouter } from './profiles';

export const modelsRouter = router({
    profiles: profilesRouter,
    images: imagesRouter,
    groups: groupsRouter,
    groupParticipants: groupParticipantsRouter,
    messages: messagesRouter,
});
