import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';

export const AppContainer = styled(Container)(({ theme }) => ({
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
        maxWidth: '600px',
        marginTop: '1rem'
    },
    [theme.breakpoints.down('md')]: {
        maxWidth: '900px',
        marginTop: '0.5rem'
    },
}));

