import { ChatMessage } from "src/model/ChatMessage";
import ChatUser from "src/model/ChatUser";

class AppState {
    joined: boolean;
    roomId: string;
    userName: string;
    MyWS: WebSocket | undefined;
    users: ChatUser[];
    messages: ChatMessage[] | [];
    darkTheme: boolean;
    constructor() {
        this.MyWS = undefined;
        this.joined = false;
        this.roomId = "";
        this.userName = "";
        this.users = [];
        this.messages = [];
        this.darkTheme = false;
    }

}

export default AppState

//new Array(10).fill({ date: new Date().toString(), sender: { id: '1', name: 'Abobus' }, text: 'text' })