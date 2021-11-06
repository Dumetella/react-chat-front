import { ChatMessage } from "src/model/ChatMessage";
import ChatRoom from "src/model/ChatRoom";
import ChatUser from "src/model/ChatUser";


interface setDataAction {
    type: 'SET_DATA'
    room: {
        users: ChatUser[]
    }
}

interface newMessageAction {
    type: 'NEW_MESSAGE'
    room: {
        messages: ChatMessage
    }
}

type ChatActionTypes = setDataAction | newMessageAction;

export default ChatActionTypes;

const setData = (room: ChatRoom): setDataAction => {
    return {
        type: 'SET_DATA',
        room: {
            users: room.users,
        }
    }
}

const newMessage = (message: ChatMessage): newMessageAction => {
    return {
        type: 'NEW_MESSAGE',
        room: {
            messages: message
        }
    }
}


export { setData, newMessage }
