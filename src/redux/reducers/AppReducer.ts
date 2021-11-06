import AppActionTypes from '../actions/AppAction';
import AppState from '../state/AppState';

function AppReducer(state = new AppState(), action: AppActionTypes): AppState {
    switch (action.type) {
        case 'ROOM_GRANTED':
            return {
                ...state,
                roomId: action.payload.room.id,
                users: action.payload.room.users
            }
        case 'SET_USER':
            return {
                ...state,
                userName: action.payload.name,
                joined: true,
            }
        default: return state
    }
}


export default AppReducer