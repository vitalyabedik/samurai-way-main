import {MESSAGES_ADD} from './actionTypes';

export type DialogsActionType = ReturnType<typeof addMessageAC>

export const addMessageAC = (newMessageBody: string) => ({
    type: MESSAGES_ADD,
    payload: {
        newMessageBody
    }
} as const)
