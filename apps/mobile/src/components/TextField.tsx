import { TextInput } from 'react-native';

import { useTheme } from '@jshare/theme';

import { Stack } from './Stack';
import { Typography } from './Typography';

export const TextField = () => {
    const { theme } = useTheme();
    return (
        <Stack column alignStart spacing="sm">
            <Typography variant="caption" color="secondary">
                Phone number
            </Typography>
            <TextInput
                placeholder="+1 123 456 7890"
                style={{
                    paddingHorizontal: theme.spacing.xl,
                    paddingVertical: theme.spacing.lg,
                    borderRadius: theme.borderRadius['3xl'],
                    width: '100%',
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.background.light,
                }}
            />
            <Typography variant="caption" color="error.main">
                Error text here
            </Typography>
        </Stack>
    );
};
