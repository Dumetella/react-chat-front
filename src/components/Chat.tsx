import { Button, Card, CardMedia, Container, Divider, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';
import Message from './Message';


interface ChatProps {
  users: ChatUser[],
  messages?: ChatMessage[],
  userName: string,
  roomId: string,
  onAddMessage: (message: string) => void
}

function Chat(props: ChatProps) {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.createRef<HTMLDivElement>();

  const { messages, roomId, onAddMessage, userName, users } = props;

  const onSendMessage = () => {
    onAddMessage(messageValue);
    setMessageValue('');
  };

  React.useEffect(() => {
    if (!messagesRef.current) {
      return
    }
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <Box
      sx={{
        display: 'flex',
        height: '720px',
        border: '1px solid rgba(159, 183, 197, 0.2)',
        borderRadius: '8px',
      }}
    >
      <Box sx={{
        borderRight: '1px solid rgba(159, 183, 197, 0.1)',
        padding: '20px',
        width: '200px',
        backgroundColor: '#f6f9fa'
      }}>
        <Typography>Room:<b> {roomId}</b></Typography>
        <Divider />
        <Typography><b>Currently online ({users.length}):</b></Typography>
        <Stack>
          {users.map((user, index) => (
            <Typography key={index}>{user.name}</Typography>
          ))}
        </Stack>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1',
          padding: '30px'
        }}
      >
        {messages ?
          <Box
            ref={messagesRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              overflow: 'auto'
            }}
          >
            {messages.map((message, index) => (
              <Message key={index} {...message} />
            ))}
          </Box> : null}
        <Box component="form"
          sx={{
            marginTop: '20px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(0, 0, 0, 0.1)'
          }}
        >
          <TextField
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            multiline
            rows={3}
            sx={{
              width: '100%',
            }}
          />
          <Button
            onClick={onSendMessage}
            sx={{

            }}
          >
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
