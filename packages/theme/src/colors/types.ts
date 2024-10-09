export type ColorPalette = {
    accent: Color;
    background: Color;
    success: Color;
    warning: Color;
    error: Color;

    text: TextColor;
};

export type Color = {
    light: string;
    main: string;
    dark: string;
    contrastText: string;
};

export type TextColor = {
    primary: string;
    secondary: string;
    disabled: string;
    hint: string;
};
