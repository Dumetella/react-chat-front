import { Button, Card, CardMedia, Container, Divider, ListItem, Paper, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';
import { ChatBox, InputBox, MainBox, MessageBox, TextField2, UsersBox } from '../style/ChatStyles';
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

  const keyPress = (e: React.KeyboardEvent) => {

    if (e.shiftKey === false) {
      if (e.key === 'Enter') {
        e.preventDefault();
        onSendMessage();
      }
    }
    return
  }

  return (
    <MainBox>
      <UsersBox>
        <Box sx={{ margin: '20px 0px 20px 20px' }}>
          <Typography>Room:<b> {roomId}</b></Typography>
          <Divider />
          <Typography><b>Currently online ({users.length}):</b></Typography>
          <Stack>
            {users.map((user, index) => (
              <Typography key={index}>{user.name}</Typography>
            ))}
          </Stack>
        </Box>
      </UsersBox>
      <ChatBox>
        {messages ?
          <MessageBox ref={messagesRef}>
            {messages.map((message, index) => (
              <Message key={index} message={message} />
            ))}
          </MessageBox> : null}
        <InputBox component="form">
          <TextField2
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            multiline
            fullWidth={true}
            onKeyDown={keyPress}
            placeholder='Write a message'
            disableUnderline
          />
        </InputBox>
      </ChatBox>
    </MainBox>
  );
}

export default Chat;
