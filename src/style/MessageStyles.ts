import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import { Card } from "@mui/material";

export const MessageBox = styled(Box)(({ theme }) => ({
    width: '100%'
}));

export const MessageBubble = styled(Card)(({ theme }) => ({
    marginBottom: '20px',
    display: 'inline-block',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#7160ff',
    color: '#fff',
    padding: '10px 15px 15px',
    maxWidth: '720px',
    wordWrap: 'break-word',
    whiteSpace: 'break-spaces',
    width: 'auto',
    borderRadius: '8px'
}));