import { Box } from '~/components/atoms/Box';
import { Stack } from '~/components/atoms/Stack';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { Typography } from '~/components/Typography';
import { useGroupExpenses } from '~/hooks/useGroupExpenses';
import { useGroupMessages } from '~/hooks/useGroupMessages';
import { useCurrentGroup } from '~/wrappers/GroupProvider';

export default function GroupHome() {
    const { group } = useCurrentGroup();
    const { data: messages } = useGroupMessages(group.id);
    const { data: expenses } = useGroupExpenses(group.id);

    return (
        <Screen>
            <Screen.Content>
                <Header title={group.name} />
                <Stack flex={1}>
                    <Typography>Group page here</Typography>
                    <Typography>{messages?.length} messages</Typography>
                    <Typography>{expenses?.length} expenses</Typography>
                </Stack>
                <Box>
                    <Typography>Footer here</Typography>
                </Box>
            </Screen.Content>
        </Screen>
    );
}
