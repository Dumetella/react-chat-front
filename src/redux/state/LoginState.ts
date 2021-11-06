class LoginState {
    joined: boolean;
    roomId: string;
    userName: string;
    MyWS: WebSocket;
    constructor() {
        this.MyWS = new WebSocket('ws://localhost:32280/');
        this.joined = false;
        this.roomId = "";
        this.userName = "";
    }

}

export default LoginState