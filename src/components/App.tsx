import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connectionInitAction, roomJoin, sendMessage } from '../redux/actions/AppAction';
import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import { AppContainer, GlobalBackground } from '../style/Container';
import Chat from './Chat';
import LoginForm from './LoginForm';
import { DarkThemeSSS } from '../style/Themes/DarkTheme';
import { LightThemeSSS } from '../style/Themes/LightTheme';


function App() {

  const chat = useAppSelector(state => state.app);
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
        <GlobalBackground />
        <AppContainer>
          {!joined ? (
            <LoginForm onLogin={onLogin} />
          ) : (
            <Chat {...chat} onAddMessage={(m) => dispatch(sendMessage(m))} />
          )}
        </AppContainer>
      </ThemeProvider>
    </>
  );
}

export default App;


{/* <MaterialUISwitch sx={{ marginLeft: 'auto', marginRight: '40px' }}
  onClick={() => (darkTheme())}
/> */}
