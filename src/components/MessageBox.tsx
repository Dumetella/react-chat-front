import React from 'react'
import { useAppSelector } from '../redux/hooks';
import { BubblesBox, BubblesInner, BubblesScrollable } from '../style/ChatStyles'
import Message from './Message'

export default function MessageBox() {

    const messages = useAppSelector(state => state.app.messages);
    const messagesRef = React.createRef<HTMLDivElement>();

    React.useEffect(() => {
        if (!messagesRef.current) {
            return
        }
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    return (
        <BubblesBox>
            <BubblesScrollable ref={messagesRef}>
                <BubblesInner>
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </BubblesInner>
            </BubblesScrollable>
        </BubblesBox>
    )
}
