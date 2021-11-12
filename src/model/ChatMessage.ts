import ChatUser from './ChatUser';

class ChatMessage {
    public sender: ChatUser;
    public date: Date;
    public text: string;
    constructor(obj?: any) {
        this.sender = new ChatUser(obj && obj['sender']);
        this.date = obj && new Date(obj['date']) || new Date();
        this.text = obj && obj['text'] || '';
    }
    public get shortDate(): string {
        return `${this.date.getHours()}:${this.date.getMinutes()}`;
    }
};

export { ChatMessage };
