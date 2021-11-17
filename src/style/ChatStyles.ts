import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import { Input, TextField } from "@mui/material";

export const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '720px',
    border: '2px solid rgba(159, 183, 197, 0.2)',
    borderRadius: '8px',
    marginTop: '50px'
}));

export const UsersBox = styled(Box)(({ theme }) => ({
    borderRight: '2px solid rgba(159, 183, 197, 0.1)',
    width: '200px',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.primary.contrastText}`
}));

export const ChatBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: '1',
}));

export const MessageBox = styled(Box)(({ theme }) => ({
    height: '100%',
    overflow: 'auto',
    backgroundColor: `${theme.palette.primary.dark}`
}));

export const InputBox = styled(Box)(({ theme }) => ({
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: `${theme.palette.primary.main}`,
    color: '#fff',
}));

export const TextField2 = styled(Input)(({ theme }) => ({
    color: `#fff !important`,
    width: '90%',
    margin: '20px 0px 20px 20px'
}));



