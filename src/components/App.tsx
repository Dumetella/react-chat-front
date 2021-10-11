import Chat from './Chat';
import LoginForm from './LoginForm';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { requestLoginAction } from '../redux/actions/loginAction';


function App() {

  const chat = useAppSelector(state => state.chat);
  const joined = useAppSelector(state => state.login.joined);
  const dispatch = useAppDispatch();

  const onLogin = (roomId: string, userName: string) => {
    dispatch(requestLoginAction(userName, roomId))
  }

  return (
    <div className="wrapper">
      {!joined ? (
        <LoginForm onLogin={onLogin} />
      ) : (
        <Chat {...chat} userName="Aboba" roomId="Test1" onAddMessage={(m) => console.log(m)} />
      )}
    </div>
  );
}

export default App;



