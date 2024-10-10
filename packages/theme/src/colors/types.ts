export type ColorPalette = {
    accent: BackgroundColor;
    background: BackgroundColor;
    success: BackgroundColor;
    warning: BackgroundColor;
    error: BackgroundColor;

    text: TextColor;
};

export type BackgroundColor = {
    light: string;
    main: string;
    dark: string;
};

export type TextColor = {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
};

export type BackgroundColorVariant = keyof BackgroundColor;
export type BackgroundColorKey = keyof Omit<ColorPalette, 'text'>;
export type BackgroundColorPath = `${BackgroundColorKey}.${BackgroundColorVariant}`;
export type TextColorVariant = keyof TextColor;
export type TextColorPath = `text.${TextColorVariant}`;
