import styled from "styled-components";

export const MessageBox = styled.div(({ theme }) => ({
    width: '90%',
    paddingTop: '1.5rem',
    paddingLeft: '1.5rem'
}));

export const MessageBubble = styled.div(({ theme }) => ({
    marginBottom: '20px',
    display: 'inline-block',
    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: `${theme.palette.primary.main}`,
    color: `${theme.palette.text.primary}`,
    padding: '10px 15px 15px',
    maxWidth: '25rem',
    wordWrap: 'break-word',
    whiteSpace: 'break-spaces',
    width: 'auto',
    borderRadius: '8px',
    minWidth: '5rem',
}));

export const InnerMessageBox = styled.div(({ theme }) => ({
    display: 'inline-flex',
}));