import LoginData from '../../model/loginData'

interface RequestLoginAction {
    type: 'LOGIN_REQUEST'
    loginData: {
        userName: string
        roomId: string
    }
}

interface LoginAction {
    type: 'LOGIN_JOINED'
    loginData: {
        userName: string
        roomId: string
        joined: boolean
    }
}


type LoginActionTypes = LoginAction | RequestLoginAction

export default LoginActionTypes;


const loginAction = (loginData: LoginData): LoginAction => {
    return {
        type: 'LOGIN_JOINED',
        loginData: {
            userName: loginData.userName,
            roomId: loginData.roomId,
            joined: true,
        }
    }
}

const requestLoginAction = (userName: string, roomId: string): RequestLoginAction => {
    return {
        type: 'LOGIN_REQUEST',
        loginData: {
            roomId,
            userName
        }
    }
}

export { loginAction, requestLoginAction }