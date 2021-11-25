import { Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';
import { toggleDark } from '../redux/actions/AppAction';
import { useAppDispatch } from '../redux/hooks';
import { BubblesBox, RightBackground, RightBackgroundBox, RightOuterBox, RightHeader, HeaderUtils, InputBox, LeftColumn, MainBox, MaterialUISwitch, MessageBox, RightColumn, TextField2, UsersBox, RightInnerBox } from '../style/ChatStyles';
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
  const dispatch = useAppDispatch();


  const { messages, roomId, onAddMessage, userName, users } = props;

  const onSendMessage = () => {
    if (messageValue.trim() === '') {
      setMessageValue('');
      return
    }
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

  const darkTheme = () => {
    dispatch(toggleDark());
  }

  return (
    <MainBox>
      <LeftColumn>
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
      </LeftColumn>
      <RightColumn>
        <RightOuterBox>
          <RightInnerBox>
            <RightBackgroundBox>
              <RightBackground />
            </RightBackgroundBox>
            <RightHeader>
              <HeaderUtils>
                <MaterialUISwitch
                  onClick={() => (darkTheme())}
                />
              </HeaderUtils>
            </RightHeader>
            <BubblesBox>
              {messages ?
                <MessageBox ref={messagesRef}>
                  {messages.map((message, index) => (
                    <Message key={index} message={message} />
                  ))}
                </MessageBox> : null}
            </BubblesBox>
            <InputBox component="form">
              <TextField2
                value={messageValue}
                onChange={(e) => setMessageValue(e.target.value)}
                multiline
                fullWidth={true}
                onKeyDown={keyPress}
                placeholder='Write a message'
                disableUnderline
                inputProps={{ maxLength: 1024 }}
              />
            </InputBox>
          </RightInnerBox>
        </RightOuterBox>
      </RightColumn>
    </MainBox>
  );
}

export default Chat;
