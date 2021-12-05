import React, { SyntheticEvent } from 'react'
import { useAppSelector } from '../redux/hooks';
import { BubblesBox, BubblesInner, BubblesScrollable } from '../style/ChatStyles'
import Message from './Message'

export default function MessageBox() {

    const [scrollable, setScrollable] = React.useState(true);
    const messages = useAppSelector(state => state.app.messages);
    const containerRef = React.useRef<HTMLHeadingElement>(null);

    const handleScroll = (e: SyntheticEvent<HTMLDivElement>): void => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop < e.currentTarget.clientHeight + 300;
        if (bottom) {
            setScrollable(true);
        } else {
            setScrollable(false);
        }
    }

    React.useEffect(() => {
        if (containerRef && containerRef.current && scrollable) {
            const element = containerRef.current;
            element.scroll({
                top: element.scrollHeight,
                left: 0,
                behavior: "smooth"
            });
        }
    }, [containerRef, messages]);

    return (
        <BubblesBox>
            <BubblesScrollable onScroll={(e) => handleScroll(e)} ref={containerRef}>
                <BubblesInner>
                    {messages.map((message, index) => (
                        <Message key={index} message={message} />
                    ))}
                </BubblesInner>
            </BubblesScrollable>
        </BubblesBox>
    )
}
