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
        <Stack center ar="1/1" {...rest} spacing="xl">
            <Stack center br="full" bg="brand.primary" p="xl">
                {icon && <Icon name={icon} size={32} />}
            </Stack>
            <Typography variant="h4" maxW="60%" align="center">
                {title}
            </Typography>
            <Typography variant="body1" maxW="60%" align="center" color="secondary">
                {message}
            </Typography>
        </Stack>
    );
};
