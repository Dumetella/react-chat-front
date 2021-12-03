import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connectionInitAction, roomJoin, sendMessage } from '../redux/actions/AppAction';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { AppContainer, Global } from '../style/Container';
import Chat from './Chat';
import LoginForm from './LoginForm';
import { DarkThemeSSS } from '../style/Themes/DarkTheme';
import { LightThemeSSS } from '../style/Themes/LightTheme';


function App() {

  const joined = useAppSelector(state => state.app.joined);
  const dispatch = useAppDispatch();
  const dark = useAppSelector(state => state.app.darkTheme);

  const onLogin = (roomId: string, userName: string) => {
    dispatch(roomJoin(userName, roomId))
  }

  useEffect(() => {
    dispatch(connectionInitAction());
  }, [])

  return (
    <>
      <ThemeProvider theme={dark ? DarkThemeSSS : LightThemeSSS}>
        <Normalize />
        <Global />
        {!joined ? (
          <LoginForm onLogin={onLogin} />
        ) : (
          <AppContainer>
            <Chat onAddMessage={(m) => dispatch(sendMessage(m))} />
          </AppContainer>
        )}
      </ThemeProvider>
    </>
  );
}

export default App;

