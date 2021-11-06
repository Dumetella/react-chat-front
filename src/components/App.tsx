import React, { useEffect } from 'react';
import Chat from './Chat';
import LoginForm from './LoginForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { connectionInitAction, roomJoin } from '../redux/actions/AppAction';

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
    <div className="wrapper">
      {!joined ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <Chat {...chat} onAddMessage={(m) => console.log(m)} />
      )}
    </div>
  );
}

export default App;



