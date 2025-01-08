import { Box } from '~/components/atoms/Box';
import { Screen } from '~/components/Screen';
import { trpc } from '~/services/trpc';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/summary',
    },
    ({ params }) => {
        const [group] = trpc.groups.get.useSuspenseQuery({ id: params.groupId });
        return (
            <Screen>
                <Screen.Header title="Summary" subtitle={group.name} />
                <Screen.Content>
                    <Box pt="2xl" />
                </Screen.Content>
            </Screen>
        );
    }
);
