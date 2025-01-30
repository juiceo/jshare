import { useRef, useState } from 'react';
import { StyleSheet, TextInput, type TextInputProps } from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import { useTheme, type Theme } from '@jshare/theme';

import { FormControl, type FormControlProps } from '~/components/atoms/FormControl';

export type TextFieldProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    TextInputProps?: TextInputProps;
    inputRef?: React.RefObject<any>;
    bottomSheet?: boolean;
} & Omit<FormControlProps, 'focused' | 'onPress'>;

export const TextField = (props: TextFieldProps) => {
    const { theme } = useTheme();
    const {
        value,
        onChange,
        inputRef: _inputRef,
        placeholder,
        bottomSheet,
        TextInputProps,
        ...formControlProps
    } = props;
    const innerInputRef = useRef<any>(null);
    const inputRef = props.inputRef ?? innerInputRef;
    const [focused, setFocused] = useState<boolean>(false);
    const styles = getStyles(theme);

    const InputComponent = bottomSheet ? BottomSheetTextInput : TextInput;

    return (
        <FormControl
            {...formControlProps}
            onPress={() => inputRef.current?.focus()}
            focused={focused}
        >
            <InputComponent
                value={value}
                onChangeText={onChange}
                ref={inputRef}
                style={styles.input}
                placeholderTextColor={theme.palette.text.disabled}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                cursorColor={theme.palette.primary.light}
                selectionColor={theme.palette.primary.light}
                selectionHandleColor={theme.palette.primary.light}
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
            fontFamily: theme.typography.body1.fontFamily,
        },
    });
};
