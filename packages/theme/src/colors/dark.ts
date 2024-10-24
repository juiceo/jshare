import type { ColorPalette } from './types';

export const darkPalette: ColorPalette = {
    accent: {
        light: '#CFF2CF',
        main: '#AFE1AF',
        dark: '#88B688',
    },
    background: {
        dark: '#0A0A0A',
        default: '#121212',
        elevation1: '#1A1A1A', // Slightly lighter for low elevation
        elevation2: '#222222', // Medium elevation
        elevation3: '#2A2A2A',
    },
    border: {
        paper: '#3C3C3C',
        divider: '#2C2C2C',
    },
    success: {
        light: '#66BB6A',
        main: '#388E3C',
        dark: '#1B5E20',
    },
    warning: {
        light: '#FFCA28',
        main: '#FFA000',
        dark: '#FF6F00',
    },
    error: {
        light: '#EF5350',
        main: '#D32F2F',
        dark: '#B71C1C',
    },
    text: {
        primary: '#E0E0E0',
        secondary: '#B3B3B3',
        disabled: '#757575',
        hint: '#9E9E9E',
    },
};
