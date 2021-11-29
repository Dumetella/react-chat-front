import React from 'react'
import { SimpleText } from '../style/ChatStyles'
import { ChatMessage } from '../model/ChatMessage'
import { InnerMessageBox, MessageBox, MessageBubble } from '../style/MessageStyles'


interface MessageProps {
    message: ChatMessage;
}

export default function Message(props: MessageProps): JSX.Element {
    return (
        <MessageBox>
            <MessageBubble>
                <InnerMessageBox>
                    <SimpleText>
                        {props.message.sender.name}
                    </SimpleText>
                    <SimpleText>{(props.message.shortDate)}</SimpleText>
                </InnerMessageBox>
                <SimpleText>
                    {props.message.text}
                </SimpleText>
            </MessageBubble>
        </MessageBox>
    )
}