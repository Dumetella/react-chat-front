import React from 'react';
import { toggleDark } from '../redux/actions/AppAction';
import { useAppDispatch } from '../redux/hooks';
import { RightBackground, RightBackgroundBox, RightOuterBox, RightHeader, HeaderUtils, LeftColumn, MainBox, RightColumn, RightInnerBox, SimpleText, ChatInput, InputContainer, InputWrapper, NewMessageBox, FinalInputContainer, Input } from '../style/ChatStyles';
import FancySwitch from './Internal/FancySwitch';
import MessageBox from './MessageBox';
import UserBox from './Userbox';


interface ChatProps {
  // users: ChatUser[],
  // messages?: ChatMessage[],
  // userName: string,
  // roomId: string,
  onAddMessage: (message: string) => void
}

function Chat(props: ChatProps) {
  const [messageValue, setMessageValue] = React.useState('');

  const dispatch = useAppDispatch();



  // const { messages, roomId, onAddMessage, userName, users } = props;

  const onSendMessage = () => {
    if (messageValue.trim() === '') {
      setMessageValue('');
      return
    }
    props.onAddMessage(messageValue);
    setMessageValue('');
  };



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
      <LeftColumn>
        <UserBox />
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
                <FancySwitch onClick={() => dispatch(toggleDark())} />
              </HeaderUtils>
            </RightHeader>
            <MessageBox />
            <ChatInput>
              <InputContainer>
                <InputWrapper>
                  <NewMessageBox>
                    <FinalInputContainer>
                      <Input
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