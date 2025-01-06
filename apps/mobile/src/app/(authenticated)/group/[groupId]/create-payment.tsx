import { Box } from '~/components/atoms/Box';
import { Screen } from '~/components/Screen';
import { screen } from '~/wrappers/screen';

export default screen(
    {
        route: '/(authenticated)/group/[groupId]/create-payment',
    },
    () => {
        return (
            <Screen>
                <Screen.Header title="New payment" backButton="down" disableInset />
                <Screen.Content>
                    <Box pt="2xl" />
                </Screen.Content>
            </Screen>
        );
    }
);
