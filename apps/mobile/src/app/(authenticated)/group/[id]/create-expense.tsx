import { Box } from '~/components/atoms/Box';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';

export default function CreateExpense() {
    return (
        <Screen disableTopInset>
            <Screen.Content>
                <Box pt="2xl" />
                <Header title="New expense" />
            </Screen.Content>
        </Screen>
    );
}
