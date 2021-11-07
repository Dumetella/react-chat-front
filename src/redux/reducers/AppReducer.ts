import AppActionTypes from '../actions/AppAction';
import AppState from '../state/AppState';

function AppReducer(state = new AppState(), action: AppActionTypes): AppState {
    switch (action.type) {
        case 'SOCKET_INIT':
            return {
                ...state,
                MyWS: action.payload.socket
            }
        case 'ROOM_GRANTED':
            return {
                ...state,
                roomId: action.payload.room.id,
                users: action.payload.room.users,
                joined: true,
            }
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload.users
            }

        case 'MESSAGE_RECV':
            return {
                ...state,
                messages: [...state.messages, action.payload.message]
            }
        default: return state
    }
}


export default AppReducer