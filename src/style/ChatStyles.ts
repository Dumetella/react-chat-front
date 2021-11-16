import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';

export const MainBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    height: '720px',
    border: '2px solid rgba(159, 183, 197, 0.2)',
    borderRadius: '8px',
}));

export const UsersBox = styled(Box)(({ theme }) => ({
    borderRight: '2px solid rgba(159, 183, 197, 0.1)',
    padding: '20px',
    width: '200px',
    backgroundColor: '#f6f9fa',
}));

export const ChatBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    flex: '1',
}));

export const MessageBox = styled(Box)(({ theme }) => ({
    height: '100%',
    overflow: 'auto',
}));

export const InputBox = styled(Box)(({ theme }) => ({
    marginTop: '20px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
}));



