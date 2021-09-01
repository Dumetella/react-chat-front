import { room, user, message } from '../../model/room';

interface setDataAction {
    type: 'SET_DATA'
    room: {
        users: user[]
        messages: message[]
    }
}

interface setUsersAction {
    type: 'SET_USERS'
    room: {
        users: user[]
    }
}

interface newMessageAction {
    type: 'NEW_MESSAGE'
    room: {
        messages: message
    }
}

type ChatActionTypes = setDataAction | setUsersAction | newMessageAction;

export default ChatActionTypes;

const setData = (room: room): setDataAction => {
    return {
        type: 'SET_DATA',
        room: {
            users: room.users,
            messages: room.messages
        }
    }
}

const setUsers = (room: room): setUsersAction => {
    return {
        type: 'SET_USERS',
        room: {
            users: room.users
        }
    }
}

const newMessage = (message: message): newMessageAction => {
    return {
        type: 'NEW_MESSAGE',
        room: {
            messages: message
        }
    }
}


export { setData, setUsers, newMessage }
