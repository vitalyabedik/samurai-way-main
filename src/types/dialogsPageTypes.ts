import {UsersType} from './usersTypes';

export type MessageType = {
    id: number
    message: string
}


export type DialogsPageType = {
    dialogs: UsersType
    messages: MessageType[]
    newMessageBody: string
}