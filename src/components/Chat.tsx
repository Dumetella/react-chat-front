import { Button, Card, CardMedia, Container, Divider, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';
import { ChatBox, InputBox, MainBox, MessageBox, UsersBox } from '../style/ChatStyles';
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
    <MainBox>
      <UsersBox>
        <Typography>Room:<b> {roomId}</b></Typography>
        <Divider />
        <Typography><b>Currently online ({users.length}):</b></Typography>
        <Stack>
          {users.map((user, index) => (
            <Typography key={index}>{user.name}</Typography>
          ))}
        </Stack>
      </UsersBox>
      <ChatBox>
        {messages ?
          <MessageBox ref={messagesRef}>
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </MessageBox> : null}
        <InputBox component="form">
          <TextField
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            multiline
            rows={2}
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
        </InputBox>
      </ChatBox>
    </MainBox>
  );
}

export default Chat;
