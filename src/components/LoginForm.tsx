import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';

interface LoginProps {
    onLogin: (roomId: string, userName: string) => void
}


function LoginForm(props: LoginProps) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Incorrect input');
        }

        setLoading(true);

        props.onLogin(roomId, userName);
    };

    return (
        <Box sx={{ display: 'flex', margin: 'auto', minHeight: "100vh" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '300px', marginTop: '50%' }}>
                <Typography variant="h2" marginBottom="20px">React Chat</Typography>
                <TextField
                    id="outlined-basic"
                    label="Room ID"
                    variant="outlined"
                    sx={{ marginBottom: "10px" }}
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    inputProps={{ maxLength: 12 }}
                />
                <TextField
                    id="outlined-basic"
                    label="Nickname"
                    variant="outlined"
                    value={userName}
                    sx={{ marginBottom: "10px" }}
                    onChange={(e) => setUserName(e.target.value)}
                    inputProps={{ maxLength: 12 }}
                />
                <Button
                    variant="contained"
                    disabled={isLoading}
                    onClick={onEnter}
                    sx={{ minHeight: '3rem' }}
                >Join
                </Button>
            </Box>
        </Box>
    );
}

export default LoginForm;
