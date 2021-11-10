import { Button, Card, CardMedia, Container, Divider, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';


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
        height: '500px',
        border: '1px solid rgba(159, 183, 197, 0.2)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <Box sx={{
        borderRight: '1px solid rgba(159, 183, 197, 0.1)',
        padding: '20px',
        width: '200px',
        backgroundColor: '#f6f9fa'
      }}>
        <Typography>Room:<b> {roomId}Aboba</b></Typography>
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
          justifyContent: 'space-between',
          flex: '1',
          padding: '30px'
        }}
      >
        {messages ?
          <Box
            ref={messagesRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: '1',
              height: 'calc(100% - 155px)',
              overflow: 'auto'
            }}
          >
            {messages.map((message, index) => (
              <Card
                variant="outlined"
                key={index}
                sx={{
                  marginBottom: '20px',
                  display: 'inline-flex',
                  borderRadius: '10px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                  backgroundColor: '#7160ff',
                  padding: '10px 15px 15px',
                  color: '#fff',
                }}
              >
                <Typography>{message.text}</Typography>
                <Typography>{message.sender.name}</Typography>
                <Typography>{new Date(message.date).toTimeString()}</Typography>
              </Card>
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
          <Button onClick={onSendMessage}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;
