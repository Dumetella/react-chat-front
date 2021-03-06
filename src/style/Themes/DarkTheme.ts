import { DefaultTheme } from "styled-components";

export const DarkThemeSSS: DefaultTheme = {
    type: 'dark',
    palette: {
        primary: {
            light: '#212121',
            main: '#8774E1',
            dark: '#0f0f0f',
            contrastText: '#66727D',
        },
        divider: '#0f0f0f',
        background: {
            default: '#181818',
            paper: '#0f0f0f',
        },
        text: {
            primary: '#fff',
            secondary: '#66727D',
        },
    },
    breakpoints: {
        sm: 'screen and (max-width: 640px)',
        md: 'screen and (max-width: 768px)',
        lg: 'screen and (max-width: 1024px)',
        xl: 'screen and (max-width: 1280px)'
    },
    fonts: {
        title: '"Roboto", "Helvetica", "Arial", "sans-serif"',
        main: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    },
};


