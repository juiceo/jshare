import { useRef } from 'react';
import {
    Pressable,
    TextInput,
    type NativeSyntheticEvent,
    type TextInputKeyPressEventData,
} from 'react-native';
import { range } from 'lodash';

import { useTheme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';
import { Typography } from '~/components/Typography';

export type PinCodeInputProps = {
    /**
     * The amount of digits in the pin code
     */
    digits: number;
    /**
     * The current value of the input
     */
    value: number[];
    /**
     * Callback fired when the value changes. Done will be true if the length of the value is equal to @digits
     */
    onChange: (value: number[], done: boolean) => void;
    /**
     * Whether the input is disabled
     */
    disabled?: boolean;
};

export const PinCodeInput = (props: PinCodeInputProps) => {
    const { digits, value, onChange, disabled } = props;
    const inputRef = useRef<TextInput>(null);

    const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>) => {
        const char = e.nativeEvent.key;

        switch (char) {
            case 'Backspace': {
                return onChange([...value].slice(0, -1), false);
            }
            default: {
                const numChar = Number(char);
                if (isNaN(numChar)) return;
                if (value.length === digits) return;
                const newValue = [...value, numChar];
                return onChange(newValue, newValue.length === digits);
            }
        }
    };

    return (
        <Pressable onPress={() => inputRef.current?.focus()} disabled={disabled}>
            <Stack row center spacing="md">
                {range(0, digits).map((index) => (
                    <Digit key={index} value={value[index]} focused={index === value.length} />
                ))}
            </Stack>
            <TextInput
                readOnly={disabled}
                pointerEvents="none"
                style={{ display: 'none' }}
                ref={inputRef}
                keyboardType="number-pad"
                autoComplete="one-time-code"
                autoCorrect={false}
                autoCapitalize="none"
                autoFocus
                onKeyPress={handleKeyPress}
            />
        </Pressable>
    );
};

const Digit = (props: { value: number | undefined; focused?: boolean }) => {
    const { theme } = useTheme();
    return (
        <Stack
            center
            style={{
                width: 36,
                height: 36,
                borderRadius: theme.borderRadius.md,
                backgroundColor: theme.palette.background.elevation2,
                borderWidth: 2,
                borderColor: props.focused
                    ? theme.palette.accent.main
                    : theme.palette.background.elevation2,
                borderStyle: 'solid',
            }}
        >
            <Typography variant="h3" align="center">
                {props.value}
            </Typography>
        </Stack>
    );
};
