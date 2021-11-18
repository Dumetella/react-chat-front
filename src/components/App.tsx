import React, { useEffect } from 'react';
import Chat from './Chat';
import LoginForm from './LoginForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connectionInitAction, roomJoin, sendMessage, toggleDark } from '../redux/actions/AppAction';
import { AppContainer } from '../style/Container';
import { MaterialUISwitch } from '../style/ChatStyles';
import { AppBar } from '@mui/material';
import { ThemeProvider } from '@mui/system';
import { theme } from '../style/theme';
import { CssBaseline } from '@mui/material';

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

  const darkTheme = () => {
    dispatch(toggleDark());
  }

  return (
    <>
      <ThemeProvider theme={theme(dark ? 'dark' : 'light')}>
        <CssBaseline />
        <AppBar>
          <MaterialUISwitch sx={{ marginLeft: 'auto', marginRight: '40px' }}
            onClick={() => (darkTheme())}
          />
        </AppBar>
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



