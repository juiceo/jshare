import { useRef, useState } from 'react';
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

    const majorUnitsInputRef = useRef<any>(null);
    const minorUnitsInputRef = useRef<any>(null);

    const majorUnits = Math.floor(value / 100);
    const minorUnits = value % 100;

    const [minorUnitsValue, setMinorUnitsValue] = useState<string>(
        minorUnits === 0 ? '' : minorUnits.toString()
    );

    const styles = getStyles(theme);

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
        onChange(units * 100 + minorUnits);
    };

    const handleMinorUnitsChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        const value = e.nativeEvent.text;
        if (value.length > 2) return;
        setMinorUnitsValue(value);
    };

    const handleMinorUnitsBlur = () => {
        let units =
            minorUnitsValue.length === 0
                ? 0
                : minorUnitsValue.length === 1
                  ? 10 * parseInt(minorUnitsValue, 10)
                  : parseInt(minorUnitsValue, 10);
        if (isNaN(units)) {
            units = 0;
        }
        if (units > 99) return;
        if (units === 0) {
            setMinorUnitsValue('');
        }
        if (units >= 10 && minorUnitsValue.length === 1) {
            setMinorUnitsValue(units.toString());
        }
        onChange(majorUnits * 100 + units);
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
                        onBlur={handleMinorUnitsBlur}
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
