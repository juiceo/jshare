import { formatAmount } from '@jshare/common';
import {
    useTheme,
    type BackgroundColorPath,
    type ColorPath,
    type PrimaryColorPath,
} from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type StatusBadgeProps = {
    amount: number;
    currency: string;
    prefix?: string;
    backgroundColor?: BackgroundColorPath | PrimaryColorPath;
    small?: boolean;
};

export const StatusBadge = (props: StatusBadgeProps) => {
    const { prefix, currency, amount } = props;
    const { theme } = useTheme();
    const isNegative = props.amount < 0;
    const isPositive = props.amount > 0;
    return (
        <Stack
            row
            alignCenter
            bg={props.backgroundColor ?? 'background.secondary'}
            px="md"
            py="xs"
            br="xl"
            spacing="sm"
        >
            {prefix && (
                <Typography variant={props.small ? 'h6' : 'h5'} style={{ lineHeight: 0 }}>
                    {prefix}{' '}
                </Typography>
            )}
            <Typography
                variant={props.small ? 'h6' : 'h5'}
                color="secondary"
                style={{
                    lineHeight: 0,
                    color: isPositive
                        ? theme.palette.success.secondary
                        : isNegative
                          ? theme.palette.error.secondary
                          : theme.palette.text.secondary,
                }}
            >
                {isPositive ? '+' : ''}
                {formatAmount(amount, currency)}
            </Typography>
        </Stack>
    );
};
