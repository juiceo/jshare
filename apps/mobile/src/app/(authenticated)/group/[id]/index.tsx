import { Typography } from '~/components/atoms/Typography';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { useCurrentGroup } from '~/wrappers/GroupProvider';

export default function GroupHome() {
    const { group } = useCurrentGroup();
    return (
        <Screen>
            <Screen.Content>
                <Header title={group.name} />
                <Typography>Group page here</Typography>
            </Screen.Content>
        </Screen>
    );
}
