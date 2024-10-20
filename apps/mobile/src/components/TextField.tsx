import { useRef, useState } from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { FormControl } from './FormControl';

export type TextFieldProps = {
    label: string;
    error?: string | null;
    value: string;
    onChange: (value: string) => void;
    TextInputProps?: TextInputProps;
};

export const TextField = (props: TextFieldProps) => {
    const { theme } = useTheme();
    const { label, error, value, onChange, TextInputProps } = props;
    const inputRef = useRef<TextInput>(null);
    const [focused, setFocused] = useState<boolean>(false);
    const styles = getStyles(theme);
    return (
        <FormControl
            label={label}
            error={error}
            onPress={() => inputRef.current?.focus()}
            focused={focused}
        >
            <TextInput
                value={value}
                onChangeText={onChange}
                ref={inputRef}
                style={styles.input}
                placeholderTextColor={theme.palette.text.disabled}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                cursorColor={theme.palette.accent.main}
                selectionColor={theme.palette.accent.main}
                selectionHandleColor={theme.palette.accent.main}
                {...TextInputProps}
            />
        </FormControl>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        inputWrapper: {
            borderRadius: theme.borderRadius.lg,
            width: '100%',
            color: theme.palette.text.primary,
            backgroundColor: 'rgba(255,255,255,0.05)',
            fontSize: theme.typography.body1.fontSize,
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1,
            borderStyle: 'solid',
        },
        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
        },
    });
};
