class ChatUser {
    public id: string;
    public name: string
    constructor(obj?: any) {
        this.id = obj && obj['id'] || '';
        this.name = obj && obj['name'] || '';
    }
}

export default ChatUser;
