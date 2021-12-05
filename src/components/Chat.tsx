import React from 'react';
import { toggleDark } from '../redux/actions/AppAction';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { RightBackground, RightBackgroundBox, RightOuterBox, RightHeader, HeaderUtils, LeftColumn, MainBox, RightColumn, RightInnerBox, SimpleText, HeaderCaption } from '../style/ChatStyles';
import ChatInputC from './ChatInput';
import FancySwitch from './Internal/FancySwitch';
import MessageBox from './MessageBox';
import UsersBox from './Userbox';

function Chat() {

  const dispatch = useAppDispatch();
  const dark = useAppSelector(state => state.app.darkTheme);

  return (
    <MainBox>
      <LeftColumn>
        <UsersBox />
      </LeftColumn>
      <RightColumn>
        <RightOuterBox>
          <RightInnerBox>
            <RightBackgroundBox>
              <RightBackground />
            </RightBackgroundBox>
            <RightHeader>
              <HeaderUtils>
                <HeaderCaption>Toggle Dark Theme</HeaderCaption>
                <FancySwitch checked={dark} onChange={() => dispatch(toggleDark())} />
              </HeaderUtils>
            </RightHeader>
            <MessageBox />
            <ChatInputC />
          </RightInnerBox>
        </RightOuterBox>
      </RightColumn>
    </MainBox>
  );
}

export default Chat;