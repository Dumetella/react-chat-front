import React from 'react';
import { Header, Form, SInput, InputContainer, Label, FormContainer } from '../style/LoginFormStyles';
import LoginButton from './Internal/LoginButton';

interface LoginProps {
    onLogin: (roomId: string, userName: string) => void
}


function LoginForm(props: LoginProps) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    const onEnter = async () => {
        if (!roomId || !userName) {
            return alert('Incorrect input');
        }

        setLoading(true);

        props.onLogin(roomId, userName);
    };

    return (
        <>
            <div className="form-container">
                <Header>React Chat</Header>
                <div className="input-container">
                    <input
                        type="text"
                        id="roomid"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                    />
                    <label>Room Id</label>
                </div>
                <div className="input-container">
                    <input
                        type="text"
                        id="username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <label>Username</label>
                </div>
                <LoginButton
                    disabled={isLoading}
                    onClick={onEnter}
                    text={'Join'}
                />
            </div>
        </>
    );
}

export default LoginForm;


// <div class="form-container">
//   <form action="">
//     <div class="input-container">
//       <input type="text" id="name" required/>
//       <label for="name">First Name</label>
//     </div>

//     <div class="input-container">
//       <input type="email" id="email" required/>
//       <label for="email">Email</label>
//     </div>
//   </form>
// </div>