import { ChatMessage } from "src/model/ChatMessage";
import ChatUser from "src/model/ChatUser";

class AppState {
    joined: boolean;
    roomId: string;
    userName: string;
    MyWS: WebSocket | undefined;
    users: ChatUser[];
    messages: ChatMessage[];
    constructor() {
        this.MyWS = undefined;
        this.joined = false;
        this.roomId = "";
        this.userName = "";
        this.users = [];
        this.messages = [];
    }

}

export default AppState