import { Stack } from '~/components/atoms/Stack';
import { Icon, type IconName } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type EmptyStateProps = {
    icon?: IconName;
    title?: string;
    message?: string;
};

export const EmptyState = (props: EmptyStateProps) => {
    return (
        <Stack center ar="1/1">
            {props.icon && <Icon name={props.icon} size={48} />}
            <Typography variant="h4" maxW="60%" align="center">
                {props.title}
            </Typography>
            <Typography variant="body1" maxW="60%" align="center">
                {props.message}
            </Typography>
        </Stack>
    );
};
