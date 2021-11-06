import ChatUser from "src/model/ChatUser";

class AppState {
    joined: boolean;
    roomId: string;
    userName: string;
    MyWS: WebSocket;
    users: ChatUser[];
    constructor() {
        this.MyWS = new WebSocket('ws://localhost:32280/');
        this.joined = false;
        this.roomId = "";
        this.userName = "";
        this.users = [];
    }

}

export default AppState