import React, { useEffect } from 'react';
import Chat from './Chat';
import LoginForm from './LoginForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connectionInitAction, roomJoin, sendMessage } from '../redux/actions/AppAction';
import { Container } from "@mui/material"

function App() {

  const chat = useAppSelector(state => state.app);
  const joined = useAppSelector(state => state.app.joined);
  const dispatch = useAppDispatch();

  const onLogin = (roomId: string, userName: string) => {
    dispatch(roomJoin(userName, roomId))
  }

  useEffect(() => {
    dispatch(connectionInitAction());
  }, [])

  return (
    <Container
      sx={{
        margin: '100px auto',
        maxWidth: '40%',
        minWidth: '720px'
      }}
    >
      {!joined ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <Chat {...chat} onAddMessage={(m) => dispatch(sendMessage(m))} />
      )}
    </Container>
  );
}

export default App;



