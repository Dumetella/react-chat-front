interface room {
    messages: message[]
    users: user[]
}

interface user {
    userId: string
    nick: string
}

interface message {
    text: string
    sender: user['nick']
    date: Date
}

export type { user, message, room }