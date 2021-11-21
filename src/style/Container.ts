import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Box } from "@mui/system";

export const AppContainer = styled(Box)(({ theme }) => ({
    minHeight: '100%',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1680px',
    height: '100%',
    borderTopWidth: '0',
    borderRightWidth: '1px',
    borderBottomWidth: '0',
    borderLeftWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#0f0f0f',
    display: 'flex',
}));



// [theme.breakpoints.down('sm')]: {
//     maxWidth: '600px',
//     marginTop: '1rem'
// },
// [theme.breakpoints.down('md')]: {
//     maxWidth: '900px',
//     marginTop: '0.5rem'
// },