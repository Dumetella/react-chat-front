import React from 'react'
import styled, { DefaultStyledComponent } from "styled-components";
import { ChatMessage } from '../model/ChatMessage'



interface MessageProps {
    message: ChatMessage;
}

export default function Message(props: MessageProps): JSX.Element {
    return (
        <MessageBox>
            <MessageBubble>
                <InnerMessageBox>
                    <Sender>
                        {props.message.sender.name}
                    </Sender>
                    <Date>{(props.message.shortDate)}</Date>
                </InnerMessageBox>
                <Text>
                    {props.message.text}
                </Text>
            </MessageBubble>
        </MessageBox>
    )
}

const MessageBox = styled.div<DefaultStyledComponent>`
    width: 90%;
    padding-top: 1.5rem;
    padding-left: 1.5rem;
`

const MessageBubble = styled.div<DefaultStyledComponent>`
    margin-bottom: 20px;
    display: inline-block;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    background-color: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.text.primary};
    padding: 10px 15px 15px;
    max-width: 25rem;
    word-wrap: break-word;
    white-space: break-spaces;
    width: auto;
    border-radius: 8px;
    min-width: 5rem;
`

const InnerMessageBox = styled.div<DefaultStyledComponent>`
    display: inline-flex;
`

const Sender = styled.div`
    margin-right: 10px;
`
const Date = styled.div`
    margin-left: 10px;
`

const Text = styled.div`
    
`