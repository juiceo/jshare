import { formatAmount } from '@jshare/common';
import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type StatusBadgeProps = {
    amount: number;
    currency: string;
    prefix?: string;
};

export const StatusBadge = (props: StatusBadgeProps) => {
    const { prefix, currency, amount } = props;
    const { theme } = useTheme();
    const isNegative = props.amount < 0;
    const isPositive = props.amount > 0;
    return (
        <Stack row alignCenter bg="background.elevation1" px="md" br="xl" spacing="sm">
            {prefix && <Typography variant="h6">Status: </Typography>}
            <Typography
                variant="h6"
                color="secondary"
                style={{
                    color: isPositive
                        ? theme.palette.success.light
                        : isNegative
                          ? theme.palette.error.light
                          : theme.palette.text.secondary,
                }}
            >
                {isPositive ? '+' : ''}
                {formatAmount(amount, currency)}
            </Typography>
        </Stack>
    );
};
