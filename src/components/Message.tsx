import { Card, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ChatMessage } from 'src/model/ChatMessage'

export default function Message(props: ChatMessage): JSX.Element {
    return (
        <Card
            variant="outlined"
            sx={{
                marginBottom: '20px',
                display: 'inline-flex',
                borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                backgroundColor: '#7160ff',
                color: '#fff',
                flexDirection: 'column',
                padding: '10px 15px 15px',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                }}
            >
                <Typography
                    sx={{ marginRight: '0.5rem' }}
                >
                    {props.sender.name}
                </Typography>
                <Typography>{new Date(props.date).toTimeString()}</Typography>
            </Box>
            <Typography>
                <pre style={{ fontFamily: 'inherit' }}>
                    {props.text}
                </pre>
            </Typography>
        </Card>
    )
}
