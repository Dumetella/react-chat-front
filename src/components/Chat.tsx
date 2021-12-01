import React from 'react';
import { ChatMessage } from 'src/model/ChatMessage';
import ChatUser from 'src/model/ChatUser';
import { toggleDark } from '../redux/actions/AppAction';
import { useAppDispatch } from '../redux/hooks';
import { BubblesBox, RightBackground, RightBackgroundBox, RightOuterBox, RightHeader, HeaderUtils, LeftColumn, MainBox, RightColumn, UsersBox, RightInnerBox, BubblesInner, BubblesScrollable, Divider, SimpleText, ChatInput, InputContainer, InputWrapper, NewMessageBox, FinalInputContainer, Input } from '../style/ChatStyles';
import FancySwitch from './Internal/FancySwitch';
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
          <SimpleText>Room:<b> {roomId}</b></SimpleText>
          <Divider />
          <SimpleText><b>Currently online ({users.length}):</b></SimpleText>
          <div>
            {users.map((user, index) => (
              <SimpleText key={index}>{user.name}</SimpleText>
            ))}
          </div>
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
                <SimpleText>Toggle Dark Theme</SimpleText>
                <FancySwitch onClick={() => (darkTheme())} />
              </HeaderUtils>
            </RightHeader>
            <BubblesBox>
              <BubblesScrollable ref={messagesRef}>
                {messages ?
                  <BubblesInner >
                    {messages.map((message, index) => (
                      <Message key={index} message={message} />
                    ))}
                  </BubblesInner> : null}
              </BubblesScrollable>
            </BubblesBox>
            <ChatInput>
              <InputContainer>
                <InputWrapper>
                  <NewMessageBox>
                    <FinalInputContainer>
                      <Input type="text"
                        value={messageValue}
                        onChange={(e) => setMessageValue(e.target.value)}
                        onKeyDown={keyPress}
                      >
                      </Input>
                    </FinalInputContainer>
                  </NewMessageBox>
                </InputWrapper>
              </InputContainer>
            </ChatInput>
          </RightInnerBox>
        </RightOuterBox>
      </RightColumn>
    </MainBox>
  );
}

export default Chat;


{/* <TextField2
  value={messageValue}
  onChange={(e) => setMessageValue(e.target.value)}
  multiline
  fullWidth={true}
  onKeyDown={keyPress}
  placeholder='Write a message'
  disableUnderline
  inputProps={{ maxLength: 1024 }}
/> */}