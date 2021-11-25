import { styled } from '@mui/material/styles';
import { Box, Input, Switch, TextField } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    flex: '1 0',

}));

export const LeftColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    flex: '1 1 auto',
    flexDirection: 'column',
    minWidth: '12rem',
    maxWidth: 'calc(1680px / 6)',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    },
}));

export const UsersBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    borderRight: '2px solid rgba(159, 183, 197, 0.1)',
    width: 'calc(1680px / 6)',
    flex: '1 0',
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.primary.contrastText}`,
    minHeight: '100vh',
}));

export const RightColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '100%',
    maxHeight: '100%',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
    flex: '3',
    '&::before': {
        boxSizing: 'inherit'
    }
}));

export const RightOuterBox = styled(Box)(({ theme }) => ({
    minWidth: '100%',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '100%',
    gridTemplateRow: '100%',
    backgroundColor: `${theme.palette.primary.dark}`,
    height: '100vh',
}));

export const RightInnerBox = styled(Box)(({ theme }) => ({
    flexDirection: 'column',
    gridRowStart: '1',
    gridColumnStart: '1',
    backgroundColor: '#fff',
    overflow: 'hidden',
    width: '100%',
    display: 'flex',
}));

export const RightBackgroundBox = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    overflow: 'hidden',
    backgroundColor: `${theme.palette.primary.light}`,
    boxSizing: 'inherit',
}));

export const RightBackground = styled(Box)(({ theme }) => ({
    backgroundImage: `${theme.palette.mode === 'light' ? 'url("/assets/bg.jpeg")' : 'none'}`,
    opacity: '1',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundColor: 'inherit',
    height: '100%',
}));

export const RightHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 1rem',
    minHeight: '3.5rem',
    flex: '0 0 auto',
    userSelect: 'none',
    zIndex: 1,
    width: '100%',
    backgroundColor: '#fff'
}));

export const HeaderUtils = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    flex: '0 0 auto',
    marginLeft: 'auto'
}));

export const BubblesBox = styled(Box)(({ theme }) => ({
    width: '100%',
    flex: '1 1 auto',
    position: 'relative',
    boxSizing: 'inherit',
    scrollbarColor: 'rgba(255, 255, 255, .2)'
}));

export const ChatInput = styled(Box)(({ theme }) => ({

}));

export const InputBox = styled(Box)(({ theme }) => ({
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: `${theme.palette.primary.light}`,
    color: `${theme.palette.text.primary}`,
    height: '37px',
    margin: '0 15 15rem 15rem'
}));

export const TextField2 = styled(Input)(({ theme }) => ({
    color: `${theme.palette.text.primary}`,
    width: '100%',
}));



export const MessageBox = styled(Box)(({ theme }) => ({
    overflowY: 'auto',
    scrollbarWidth: 'thin',
    height: 'auto',
    display: 'block',
    width: '100%',
    maxHeight: '100%',
    overflowX: 'hidden',
    position: 'absolute',
    top: '0px',
    left: '0px',
    bottom: '0px',
    right: '0px',
}));



export const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
        margin: 1,
        padding: 0,
        transform: 'translateX(6px)',
        '&.Mui-checked': {
            color: '#fff',
            transform: 'translateX(22px)',
            '& .MuiSwitch-thumb:before': {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    '#fff',
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
            },
        },
    },
    '& .MuiSwitch-thumb': {
        backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
        width: 32,
        height: 32,
        '&:before': {
            content: "''",
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                '#fff',
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    '& .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
        borderRadius: 20 / 2,
    },
}));



