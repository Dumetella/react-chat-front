import 'styled-components';

declare module 'styled-components' {

    export interface DefaultStyledComponent {
        theme: DefaultTheme;
    }

    export interface DefaultTheme {
        type: 'dark' | 'light',
        palette: {
            primary: {
                light: string,
                main: string,
                dark: string,
                contrastText: string,
            },
            divider: string,
            background: {
                default: string,
                paper: string,
            },
            text: {
                primary: string,
                secondary: string,
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
    }
}