import ChatUser from "src/Proto/Model/ChatUser";

export default interface RoomJoinData {
    id: string
    users: ChatUser[];
}


