import { room, user, message } from '../../model/room'

class ChatState implements room {
    users: user[]
    messages: message[]
    constructor() {
        this.users = [{ nick: 'AMOGUS', userId: '12314HEFT' }];
        this.messages = [{ sender: 'AMOGUS', text: 'A LIKE DOTA 2 PUDGE', date: new Date() }];
    }

}

export default ChatState


