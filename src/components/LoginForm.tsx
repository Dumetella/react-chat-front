import React from 'react';
import { LHeader, LInnerContainer, LOuterContainer } from '../style/LoginFormStyles';
import FancyInput from './Internal/FancyInput';
import FancyButton from './Internal/FancyButton';

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

    const inputs = document.querySelectorAll("input");
    inputs.forEach((input: HTMLInputElement) => {
        input.addEventListener("blur", (event: any) => {
            if (event.target.value) {
                input.classList.add("is-valid");
            } else {
                input.classList.remove("is-valid");
            }
        });
    });

    return (
        <>
            <LOuterContainer>
                <LInnerContainer>
                    <LHeader>React Chat</LHeader>
                    <FancyInput
                        label="Room Id"
                        type="text"
                        id="roomid"
                        value={roomId}
                        onChange={(e) => setRoomId(e.target.value)}
                        maxLength={12}
                    />
                    <FancyInput
                        type="text"
                        id="username"
                        label="Username"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        maxLength={18}
                    />
                    <FancyButton
                        disabled={isLoading}
                        onClick={onEnter}
                        text={'Join'}
                    />
                </LInnerContainer>
            </LOuterContainer>
        </>
    );
}

export default LoginForm;