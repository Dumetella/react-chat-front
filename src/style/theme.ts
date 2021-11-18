import { createTheme } from '@mui/material/styles';

export const theme = (mode: 'dark' | 'light') => createTheme({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                // palette values for dark mode
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
                    light: '#2B5278',
                    main: '#17212B',
                    dark: '#0E1621',
                    contrastText: '#66727D',
                },
                divider: '#66727D',
                background: {
                    default: '#0E1621',
                    paper: '#0E1621',
                },
                text: {
                    primary: '#fff',
                    secondary: '#66727D',
                },
            }),
    },
});


