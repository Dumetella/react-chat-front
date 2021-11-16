import { Card, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import React from 'react'
import { ChatMessage } from '../model/ChatMessage'
import { MessageBox, MessageBubble } from '../style/MessageStyles'


interface MessageProps {
    message: ChatMessage;
}

export default function Message(props: MessageProps): JSX.Element {
    return (
        <MessageBox>
            <MessageBubble variant="outlined">
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
            </MessageBubble>
        </MessageBox>
    )
}
