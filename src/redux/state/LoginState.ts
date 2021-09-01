class LoginState {
    joined: boolean;
    roomId: string;
    userName: string;
    constructor() {
        this.joined = false;
        this.roomId = "";
        this.userName = "";
    }

}

export default LoginState