import React from 'react';
import { message, user } from "../model/room"

interface ChatProps {
  users: user[],
  messages: message[],
  userName: string,
  roomId: string,
  onAddMessage: (message: string) => void
}

function Chat(props: ChatProps) {
  const [messageValue, setMessageValue] = React.useState('');
  const messagesRef = React.createRef<HTMLDivElement>();

  const { messages, roomId, onAddMessage, userName, users } = props;

  const onSendMessage = () => {
    onAddMessage(messageValue);
    setMessageValue('');
  };

  React.useEffect(() => {
    if (!messagesRef.current) {
      return
    }
    messagesRef.current.scrollTo(0, 99999);
  }, [messages]);

  return (
    <div className="chat">
      <div className="chat-users">
        Room: <b>{roomId}</b>
        <hr />
        <b>Currently online ({users.length}):</b>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user.nick}</li>
          ))}
        </ul>
      </div>
      <div className="chat-messages">
        <div ref={messagesRef} className="messages">
          {messages.map((message, index) => (
            <div key={index} className="message">
              <p>{message.text}</p>
              <div>
                <span>{userName}</span>
              </div>
            </div>
          ))}
        </div>
        <form>
          <textarea
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
            className="form-control"
            rows={3}></textarea>
          <button onClick={onSendMessage} type="button" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chat;
