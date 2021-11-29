import ChatRoom from 'src/model/ChatRoom';
import ChatUser from 'src/model/ChatUser';
import { Message } from 'src/Proto/Model/Message';
import SocketMessage from '../../Proto/SocketMessage';
import { ThunkResult } from '../store';

interface RoomJoinRequest {
    type: 'ROOM_JOIN';
    payload: {
        name: string;
        roomId: string;
    }
}

interface RoomJoinGranted {
    type: 'ROOM_GRANTED';
    payload: {
        room: ChatRoom;
    }
}

interface RoomJoinDeclined {
    type: 'ROOM_DECLINED';
    payload: {
        reason: '?'
    }
}

interface setUsers {
    type: 'SET_USERS'
    payload: {
        users: ChatUser[];
    }
}

interface messageRecieved {
    type: 'MESSAGE_RECV'
    payload: {
        message: Message;
    }
}

interface socketInited {
    type: 'SOCKET_INIT'
    payload: {
        socket: WebSocket;
    }
}

interface toggleDark {
    type: 'TOGGLE_DARK'
}

type AppActionTypes = RoomJoinRequest | RoomJoinGranted | RoomJoinDeclined | setUsers | messageRecieved | socketInited | toggleDark;

export default AppActionTypes;


const connectionInitAction = (): ThunkResult<void> => {
    return (dispatch, getState) => {
        // const ws = new WebSocket(`ws://${location.host}/`);
        const ws = new WebSocket('ws://localhost:32280/');
        ws.addEventListener('message', (message) => {
            const msg: SocketMessage = JSON.parse(message.data);
            switch (msg.type) {
                case 'CHAT':
                    switch (msg.payload.type) {
                        case 'ROOM_GRANTED':
                            dispatch(loginAction(msg.payload.payload.room.id, msg.payload.payload.room.users));
                            dispatch(setUsers(msg.payload.payload.room.users));
                            break;

                        case 'USER_JOINED':
                            dispatch(setUsers([...getState().app.users, msg.payload.payload.user]))
                            break;

                        case 'USER_DISCONECTED':
                            //?????
                            const aboba = msg.payload.payload.user.id;
                            dispatch(setUsers(getState().app.users.filter(c => c.id !== aboba)));
                            break;

                        case 'MESSAGE_RECIEVED':
                            dispatch({
                                type: 'MESSAGE_RECV',
                                payload: {
                                    message: msg.payload.payload.message
                                }
                            })
                            break;
                        default:
                            break;
                    }
                    break;

                case 'SYS':

                default:
                    break;
            }

        });
        dispatch({
            type: 'SOCKET_INIT',
            payload: {
                socket: ws
            }
        });
    };
}

const setUsers = (users: ChatUser[]): AppActionTypes => {
    return {
        type: 'SET_USERS',
        payload: {
            users
        }
    }
}

const loginAction = (id: string, users: ChatUser[]): RoomJoinGranted => {
    return {
        type: 'ROOM_GRANTED',
        payload: {
            room: {
                id,
                users
            }
        }
    }
}

const roomJoin = (userName: string, roomId: string): ThunkResult<void> => {
    return (dispatch, getState) => {
        getState().app.MyWS?.send(JSON.stringify({
            type: 'CHAT',
            payload: {
                type: 'ROOM_JOIN',
                payload: {
                    name: userName,
                    roomId: roomId,
                }
            }
        }));
    }
}

const sendMessage = (text: string): ThunkResult<void> => {
    return (dispatch, getState) => {
        getState().app.MyWS?.send(JSON.stringify({
            type: 'CHAT',
            payload: {
                type: 'MESSAGE_SENT',
                payload: {
                    text
                }
            }
        }));
    }
}

const toggleDark = (): AppActionTypes => {
    return {
        type: 'TOGGLE_DARK'
    }
}

export { loginAction, roomJoin, connectionInitAction, sendMessage, toggleDark }


