import { type PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Stack } from '~/components/atoms/Stack';
import { Button } from '~/components/Button';
import { ErrorBoundary, type ErrorBoundaryFallbackArgs } from '~/components/errors/ErrorBoundary';
import { Icon } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export const AppErrorBoundary = (props: PropsWithChildren) => {
    const insets = useSafeAreaInsets();
    const renderFallback = (args: ErrorBoundaryFallbackArgs) => {
        return (
            <Stack bg="background.main" flex={1}>
                <Stack flex={1} column center spacing="xl" p="xl">
                    <Icon
                        name="ServerCrash"
                        size={64}
                        color={(theme) => theme.palette.error.main}
                    />
                    <Typography variant="h2" align="center">
                        Application error
                    </Typography>
                    <Typography variant="body1" align="center">
                        Oh-oh, looks like something didn't quite go as planned. We've been notified
                        about this issue and we'll look into it as soon as possible.
                    </Typography>
                    <Typography variant="caption" align="center" color="error.light">
                        Error message: {args.error.message}
                    </Typography>
                    <Typography variant="body1">
                        If the error persists, please try to close and restart the app. If that
                        doesn't help, you may need to uninstall and reinstall JShare.
                    </Typography>
                </Stack>
                <Stack p="xl" style={{ marginBottom: insets.bottom }}>
                    <Button color="primary" onPress={args.reset}>
                        Reload app
                    </Button>
                </Stack>
            </Stack>
        );
    };

    return <ErrorBoundary fallback={renderFallback}>{props.children}</ErrorBoundary>;
};
