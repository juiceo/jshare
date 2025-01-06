import { Box } from '~/components/atoms/Box';
import { Header } from '~/components/Header/Header';
import { Screen } from '~/components/Screen';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/create-payment',
    },
    () => {
        return (
            <Screen disableTopInset>
                <Screen.Content>
                    <Box pt="2xl" />
                    <Header title="New payment" />
                </Screen.Content>
            </Screen>
        );
    }
);
