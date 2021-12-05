import React from 'react'
import styled, { DefaultStyledComponent } from 'styled-components'
import { sendMessage } from '../redux/actions/AppAction';
import { useAppDispatch } from '../redux/hooks';

export default function ChatInputC(): JSX.Element {

    const [messageValue, setMessageValue] = React.useState('');

    const dispatch = useAppDispatch();

    const onSendMessage = () => {
        if (messageValue.trim() === '') {
            setMessageValue('');
            return
        }
        dispatch(sendMessage(messageValue));
        setMessageValue('');
    };

    const keyPress = (e: React.KeyboardEvent) => {
        if (e.shiftKey === false) {
            if (e.key === 'Enter') {
                e.preventDefault();
                onSendMessage();
            }
        }
        return
    }

    return (
        <ChatInput>
            <InputContainer>
                <InputWrapper>
                    <NewMessageBox>
                        <FinalInputContainer>
                            <Input
                                value={messageValue}
                                onChange={(e) => setMessageValue(e.target.value)}
                                onKeyDown={keyPress}
                                maxLength={2024}
                            >
                            </Input>
                        </FinalInputContainer>
                    </NewMessageBox>
                </InputWrapper>
            </InputContainer>
        </ChatInput>
    )
}


const ChatInput = styled.div<DefaultStyledComponent>`
    width: 100%;
    padding-bottom: 0.5rem;
    display: flex;
    max-width: 100%;
    padding-top: .25rem;
    flex-direction: column;
    flex: 0 0 auto;
    position: relative;
`

const InputContainer = styled.div<DefaultStyledComponent>`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 728px;
    margin: 0 auto;
    width: 100%;
    padding: 0;
    flex: 0 0 auto;
    position: relative;
    padding-bottom: 10px;
`

const InputWrapper = styled.div<DefaultStyledComponent>`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    justify-content: center;
    background-color: #fff;
    border-radius: 12px;
    border-bottom-right-radius: 0;
    box-shadow: 0px 1px 8px 1px rgba(0, 0, 0, .18);
    max-height: 30rem;
    flex: 0 0 auto;
    position: relative;
    z-index: 3;
`

const NewMessageBox = styled.div<DefaultStyledComponent>`
    align-items: flex-end;
    min-height: 1rem;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
    background-color: inherit;
    border-radius: .75rem;
`

const FinalInputContainer = styled.div<DefaultStyledComponent>`
    width: 1%;
    max-height: inherit;
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;
    align-self: center;
    min-height: 2rem;
    display: flex;
    align-items: center;
`

const Input = styled.textarea<DefaultStyledComponent>`
    width: 100%;
    resize: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.primary.light};
    color: ${(props) => props.theme.palette.text.primary};
    scrollbar-width: thin;
`