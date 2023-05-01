import {MESSAGES_ADD, MESSAGES_UPDATE_NEW_TEXT} from './actionTypes';


export type MessagesActionType = ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageTextAC>

export const addMessageAC = () => {
    return {
        type: MESSAGES_ADD
    } as const
}

export const changeNewMessageTextAC = (newMessageText: string) => {
    return {
        type: MESSAGES_UPDATE_NEW_TEXT,
        newMessageText
    } as const
}