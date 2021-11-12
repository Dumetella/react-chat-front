import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ChatMessage } from 'src/model/ChatMessage'


interface MessageProps {
    message: ChatMessage;
}

export default function Message(props: MessageProps): JSX.Element {
    return (
        <Box
            sx={{
                width: '100%'
            }}
        >
            <Card
                variant="outlined"
                sx={{
                    marginBottom: '20px',
                    display: 'inline-block',
                    borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#7160ff',
                    color: '#fff',
                    padding: '10px 15px 15px',
                    maxWidth: '720px',
                    wordWrap: 'break-word',
                    whiteSpace: 'break-spaces',
                    width: 'auto'
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                    }}
                >
                    <Typography
                        sx={{ marginRight: '0.5rem' }}
                        variant="body2"
                    >
                        {props.message.sender.name}
                    </Typography>
                    <Typography variant="body2">{(props.message.shortDate)}</Typography>
                </Box>
                <Typography variant="body1">
                    {props.message.text}
                </Typography>
            </Card>
        </Box>
    )
}
