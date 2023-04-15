export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}


export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}