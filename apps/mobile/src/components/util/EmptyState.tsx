import { Stack, type StackProps } from '~/components/atoms/Stack';
import { Icon, type IconName } from '~/components/Icon';
import { Typography } from '~/components/Typography';

export type EmptyStateProps = {
    title: string;
    message?: string;
    icon?: IconName;
} & StackProps;

export const EmptyState = (props: EmptyStateProps) => {
    const { icon, title, message, ...rest } = props;
    return (
        <Stack center ar="1/1" {...rest}>
            {icon && <Icon name={icon} size={48} />}
            <Typography variant="h4" maxW="60%" align="center">
                {title}
            </Typography>
            <Typography variant="body1" maxW="60%" align="center">
                {message}
            </Typography>
        </Stack>
    );
};
