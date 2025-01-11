import { useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
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

    const styles = getStyles(theme);

    const handleMajorUnitsChange = (value: string) => {
        let units = value ? parseInt(value, 10) : 0;
        if (isNaN(units)) {
            units = 0;
        }
        if (units > 9_999_999) return;
        onChange(units * 100 + minorUnits);
    };

    const handleMinorUnitsChange = (value: string) => {
        let units = value ? parseInt(value, 10) : 0;
        if (isNaN(units)) {
            units = 0;
        }
        if (units > 99) return;
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
                        onChangeText={handleMajorUnitsChange}
                        placeholderTextColor={theme.palette.text.disabled}
                        placeholder="0"
                        keyboardType="number-pad"
                        autoFocus={autoFocus}
                    />
                    <View style={[styles.dot, minorUnits !== 0 ? styles.dotActive : undefined]} />
                    <InputComponent
                        ref={minorUnitsInputRef}
                        value={minorUnits === 0 ? '' : minorUnits.toString()}
                        onChangeText={handleMinorUnitsChange}
                        style={styles.input}
                        placeholderTextColor={theme.palette.text.disabled}
                        placeholder="00"
                        keyboardType="number-pad"
                        onKeyPress={(e) => {
                            switch (e.nativeEvent.key) {
                                case 'Backspace':
                                    if (minorUnits === 0) {
                                        majorUnitsInputRef.current?.focus();
                                    }
                                    break;
                            }
                        }}
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
