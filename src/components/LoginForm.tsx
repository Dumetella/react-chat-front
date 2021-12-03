import React from 'react';
import styled, { DefaultStyledComponent } from "styled-components";
import FancyInput from './Internal/FancyInput';
import FancyButton from './Internal/FancyButton';
import FancySwitch from './Internal/FancySwitch';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { toggleDark } from '../redux/actions/AppAction';

interface LoginProps {
    onLogin: (roomId: string, userName: string) => void
}


function LoginForm(props: LoginProps) {

    const dispatch = useAppDispatch();
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);
    const dark = useAppSelector(state => state.app.darkTheme);

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
                    <LMiniContainer>
                        <SimpleCaption>Toggle Dark Theme</SimpleCaption>
                        <FancySwitch onClick={() => dispatch(toggleDark())} checked={dark} />
                    </LMiniContainer>
                </LInnerContainer>
            </LOuterContainer>
        </>
    );
}

export default LoginForm;


const LOuterContainer = styled.div<DefaultStyledComponent>`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LInnerContainer = styled.div<DefaultStyledComponent>`
  
`

const LHeader = styled.h2<DefaultStyledComponent>`
  margin: 0px 0px 20px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  font-size: 3.75rem;
  line-height: 1.2;
  letter-spacing: -0.00833em;
`

const LMiniContainer = styled.div<DefaultStyledComponent>`
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
`

const SimpleCaption = styled.div<DefaultStyledComponent>`
    font-size: 1.5rem;
`