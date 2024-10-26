import { createContext, useCallback, useEffect, useRef, type PropsWithChildren } from 'react';
import { Dimensions, Platform, Pressable, StyleSheet } from 'react-native';
import Animated, { Extrapolation, interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { FullWindowOverlay } from 'react-native-screens';
import {
    BottomSheetModal,
    useBottomSheet,
    type BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

import { useTheme, type Theme } from '@jshare/theme';

export type BottomSheetProps = {
    isOpen?: boolean;
    onClose: () => void;
};

export const BottomSheet = (props: PropsWithChildren<BottomSheetProps>) => {
    const { isOpen, onClose } = props;
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);
    const { theme } = useTheme();
    const styles = getStyles(theme);

    useEffect(() => {
        if (isOpen) {
            bottomSheetModalRef.current?.present();
        } else {
            bottomSheetModalRef.current?.dismiss();
        }
    }, [isOpen]);

    const containerComponent = useCallback((props: PropsWithChildren) => {
        return Platform.OS === 'ios' ? (
            <FullWindowOverlay>{props.children}</FullWindowOverlay>
        ) : undefined;
    }, []);

    return (
        <BottomSheetProvider isOpen={isOpen ?? false}>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                onDismiss={() => onClose()}
                containerComponent={containerComponent}
                backgroundStyle={styles.sheetBackground}
                handleIndicatorStyle={styles.handleIndicator}
                backdropComponent={Backdrop}
                maxDynamicContentSize={Dimensions.get('window').height * 0.8}
            >
                {props.children}
            </BottomSheetModal>
        </BottomSheetProvider>
    );
};

const BottomSheetContext = createContext<{ isOpen: boolean }>({ isOpen: false });
const BottomSheetProvider = (props: PropsWithChildren<{ isOpen: boolean }>) => {
    return (
        <BottomSheetContext.Provider value={{ isOpen: props.isOpen }}>
            {props.children}
        </BottomSheetContext.Provider>
    );
};

const Backdrop = (props: BottomSheetBackdropProps) => {
    const { animatedIndex, style } = props;

    const sheet = useBottomSheet();

    const animatedOpacity = useAnimatedStyle(() => ({
        opacity: interpolate(animatedIndex.value, [-1, 0], [0, 1], Extrapolation.CLAMP),
    }));

    return (
        <Animated.View
            style={[
                style,
                animatedOpacity,
                {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                },
            ]}
        >
            <Pressable style={{ width: '100%', height: '100%' }} onPress={() => sheet.close()} />
        </Animated.View>
    );
};

const getStyles = (theme: Theme) => {
    return StyleSheet.create({
        sheetBackground: {
            backgroundColor: theme.palette.background.elevation1,
        },
        handleIndicator: {
            backgroundColor: theme.palette.text.disabled,
        },
        inputWrapper: {
            borderRadius: theme.borderRadius.lg,
            width: '100%',
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.elevation1,
            fontSize: theme.typography.body1.fontSize,
            borderWidth: 1,
            borderStyle: 'solid',
        },
        input: {
            color: theme.palette.text.primary,
            fontSize: theme.typography.body1.fontSize,
        },
    });
};
