import { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    type NativeSyntheticEvent,
    type TextInputChangeEventData,
} from 'react-native';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

import { useTheme, type Theme } from '@jshare/theme';

import { Stack } from '~/components/atoms/Stack';

export type MoneyInputProps = {
    value: number;
    onChange: (value: number) => void;
    autoFocus?: boolean;
    bottomSheet?: boolean;
};

export const MoneyInput = (props: MoneyInputProps) => {
    const { value, onChange, autoFocus, bottomSheet } = props;
    const { theme } = useTheme();

    const InputComponent = bottomSheet ? BottomSheetTextInput : TextInput;

    const lastEditedValue = useRef<number | null>(null);
    const majorUnitsInputRef = useRef<any>(null);
    const minorUnitsInputRef = useRef<any>(null);

    const majorUnits = Math.floor(value / 100);
    const minorUnits = value % 100;

    const [minorUnitsValue, setMinorUnitsValue] = useState<string>(
        minorUnits === 0 ? '' : minorUnits.toString()
    );

    const styles = getStyles(theme);

    useEffect(() => {
        if (lastEditedValue.current !== value) {
            const minorUnits = value % 100;
            setMinorUnitsValue(
                minorUnits === 0 ? '' : minorUnits < 10 ? `0${minorUnits}` : minorUnits.toString()
            );
            lastEditedValue.current = null;
        }
    }, [value]);

    const handleChange = (value: number) => {
        lastEditedValue.current = value;
        onChange(value);
    };

    const handleMajorUnitsChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = e.nativeEvent.text;
        if (value.length > 7) {
            e.preventDefault();
            return;
        }
        let units = value ? parseInt(value, 10) : 0;
        if (isNaN(units)) {
            units = 0;
        }
        if (units > 9_999_999) return;
        handleChange(units * 100 + minorUnits);
    };

    const handleMinorUnitsChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = e.nativeEvent.text;
        if (value.length > 2) return;
        setMinorUnitsValue(value);

        switch (value.length) {
            case 0:
                handleChange(majorUnits * 100);
                break;
            case 1:
                handleChange(majorUnits * 100 + parseInt(value, 10) * 10);
                break;
            case 2:
                handleChange(majorUnits * 100 + parseInt(value, 10));
                break;
        }
    };

    return (
        <>
            <Stack column center>
                <Stack row alignEnd>
                    <InputComponent
                        ref={majorUnitsInputRef}
                        style={styles.input}
                        value={majorUnits === 0 ? '' : majorUnits.toString()}
                        onChange={handleMajorUnitsChange}
                        placeholderTextColor={theme.palette.text.disabled}
                        placeholder="0"
                        keyboardType="numeric"
                        autoFocus={autoFocus}
                        onKeyPress={(e) => {
                            switch (e.nativeEvent.key) {
                                case ',':
                                case '.': {
                                    minorUnitsInputRef.current?.focus();
                                    break;
                                }
                            }
                        }}
                        maxLength={7}
                    />
                    <View style={[styles.dot, minorUnitsValue ? styles.dotActive : undefined]} />
                    <InputComponent
                        ref={minorUnitsInputRef}
                        value={minorUnitsValue}
                        onChange={handleMinorUnitsChange}
                        style={styles.input}
                        placeholderTextColor={theme.palette.text.disabled}
                        placeholder="00"
                        keyboardType="numeric"
                        onKeyPress={(e) => {
                            switch (e.nativeEvent.key) {
                                case 'Backspace':
                                    if (minorUnitsValue.length === 0) {
                                        majorUnitsInputRef.current?.focus();
                                    }
                                    break;
                            }
                        }}
                        maxLength={2}
                    />
                </Stack>
            </Stack>
        </>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        input: {
            color: theme.palette.text.primary,
            fontSize: 48,
            padding: 0,
            lineHeight: 0,
        },
        dot: {
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: theme.palette.text.disabled,
            marginBottom: 12,
        },
        dotActive: {
            backgroundColor: theme.palette.text.primary,
        },
    });
};
