import { ThunkAction } from 'redux-thunk';
import ChatRoom from 'src/model/ChatRoom';
import ChatUser from 'src/model/ChatUser';
import SocketMessage from 'src/Proto/SocketMessage';
import RoomJoinData from '../../model/RoomJoinData';
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


type LoginActionTypes = RoomJoinRequest | RoomJoinGranted | RoomJoinDeclined;

export default LoginActionTypes;


const connectionInitAction = (): ThunkResult<void> => {
    return (dispatch, getState) => {
        getState().login.MyWS.addEventListener('message', (message) => {
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
        })
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
        getState().login.MyWS.send(JSON.stringify({
            type: 'SYS',
            payload: {
                type: 'ROOM_JOIN',
                payload: {
                    name: userName,
                    roomId: roomId,
                }
            }
        }));
        dispatch();
    }
}

export { loginAction, roomJoin, connectionInitAction }


