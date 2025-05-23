export type ColorPalette = {
    primary: PrimaryColor;
    accent: PrimaryColor;
    success: PrimaryColor;
    warning: PrimaryColor;
    error: PrimaryColor;

    border: BorderColor;
    background: BackgroundColor;
    text: TextColor;
};

export type PrimaryColor = {
    light: string;
    main: string;
    dark: string;
};

export type BackgroundColor = {
    system: string;
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    level1: string;
    level2: string;
    level3: string;
};

export type BorderColor = {
    primary: string;
    secondary: string;
    tertiary: string;
};

export type TextColor = {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
};

export type PrimaryColorVariant = keyof PrimaryColor;
export type PrimaryColorKey = keyof Omit<ColorPalette, 'background' | 'text' | 'border'>;
export type PrimaryColorPath = `${PrimaryColorKey}.${PrimaryColorVariant}`;

export type BackgroundColorVariant = keyof BackgroundColor;
export type BackgroundColorPath = `background.${BackgroundColorVariant}`;

export type BorderColorVariant = keyof BorderColor;
export type BorderColorPath = `border.${BorderColorVariant}`;

export type TextColorVariant = keyof TextColor;
export type TextColorPath = `text.${TextColorVariant}`;
