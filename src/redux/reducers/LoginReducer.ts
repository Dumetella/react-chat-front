import LoginActionTypes from '../actions/loginAction';
import LoginState from '../state/LoginState';

function loginReducer(state = new LoginState(), action: LoginActionTypes): LoginState {
    switch (action.type) {
        case 'ROOM_GRANTED':
            return {
                ...state,
                joined: true,
                roomId: action.payload.room.id,
                users: 
            }
        default: return state
    }
}


export default loginReducer