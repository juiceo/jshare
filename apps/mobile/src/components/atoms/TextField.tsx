import { useRef, useState } from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';

import { useTheme, type Theme } from '@jshare/theme';

import { FormControl, type FormControlProps } from '~/components/atoms/FormControl';

export type TextFieldProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    TextInputProps?: TextInputProps;
    inputRef?: React.RefObject<TextInput>;
} & Omit<FormControlProps, 'focused' | 'onPress'>;

export const TextField = (props: TextFieldProps) => {
    const { theme } = useTheme();
    const {
        value,
        onChange,
        inputRef: _inputRef,
        placeholder,
        TextInputProps,
        ...formControlProps
    } = props;
    const innerInputRef = useRef<TextInput>(null);
    const inputRef = props.inputRef ?? innerInputRef;
    const [focused, setFocused] = useState<boolean>(false);
    const styles = getStyles(theme);
    return (
        <FormControl
            {...formControlProps}
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
                placeholder={placeholder}
                {...TextInputProps}
            />
        </FormControl>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
        },
    });
};
