import LoginActionTypes from '../actions/loginAction';
import LoginState from '../state/LoginState';

function loginReducer(state = new LoginState(), action: LoginActionTypes): LoginState {
    switch (action.type) {
        case 'LOGIN_JOINED':
            return {
                ...state,
                joined: true,
                userName: action.loginData.userName,
                roomId: action.loginData.roomId,
            }
        case 'LOGIN_REQUEST':
            return {
                ...state,
                joined: true
            }

        default: return state
    }
}


export default loginReducer