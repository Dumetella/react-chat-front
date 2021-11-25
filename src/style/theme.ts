import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            danger: string;
        };
    }

    interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

export const theme = (mode: 'dark' | 'light') => createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              h1 {
                color: red;
              }
            `,
        }
    },
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for light mode
                primary: {
                    light: '#419FD9',
                    main: '#FFFFFF',
                    dark: '#F1F1F1',
                    contrastText: '#000000',
                },
                divider: '#33e3ff',
                background: {
                    default: '#FFFFFF',
                    paper: '#FFFFFF',
                },
                text: {
                    primary: '#000000',
                    secondary: '#000000',
                },
            }
            : {
                // palette values for dark mode
                primary: {
                    light: '#212121',
                    main: '#8774E1',
                    dark: '#0f0f0f',
                    contrastText: '#66727D',
                },
                divider: '#66727D',
                background: {
                    default: '#181818',
                    paper: '#181818',
                },
                text: {
                    primary: '#fff',
                    secondary: '#66727D',
                },
            }),
    },
});


