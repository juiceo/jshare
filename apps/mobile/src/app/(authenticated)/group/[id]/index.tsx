import { Typography } from '~/components/atoms/Typography';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
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
                <Typography>Group page here</Typography>
                <Typography>{messages?.length} messages</Typography>
                <Typography>{expenses?.length} expenses</Typography>
            </Screen.Content>
        </Screen>
    );
}
