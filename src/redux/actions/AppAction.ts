import ChatRoom from 'src/model/ChatRoom';
import ChatUser from 'src/model/ChatUser';
import SocketMessage from 'src/Proto/SocketMessage';
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

interface setUser {
    type: 'SET_USER'
    payload: {
        name: string,
        roomId: string,
    }
}

type AppActionTypes = RoomJoinRequest | RoomJoinGranted | RoomJoinDeclined | setUser;

export default AppActionTypes;


const connectionInitAction = (): ThunkResult<void> => {
    return (dispatch, getState) => {
        getState().app.MyWS.addEventListener('message', (message) => {
            const msg: SocketMessage = JSON.parse(message.data);
            switch (msg.type) {
                case 'SYS':
                    switch (msg.payload.type) {
                        case 'ROOM_GRANTED':
                            dispatch(loginAction(msg.payload.payload.room.id, msg.payload.payload.room.users))
                            break;

                        default:
                            break;
                    }
                    break;

                case 'CHAT':

                default:
                    break;
            }
        });
    }
}

const setUser = (name: string, roomId: string): AppActionTypes => {
    return {
        type: 'SET_USER',
        payload: {
            name: name,
            roomId: roomId,
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
        getState().app.MyWS.send(JSON.stringify({
            type: 'SYS',
            payload: {
                type: 'ROOM_JOIN',
                payload: {
                    name: userName,
                    roomId: roomId,
                }
            }
        }));
        dispatch(setUser(userName, roomId));
    }
}

export { loginAction, roomJoin, connectionInitAction }


