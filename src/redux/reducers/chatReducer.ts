import {v1} from 'uuid';

import {ChatMessageType} from '../../api/chatApi';
import {ChatActionType} from '../actions/chatActions';
import {CHAT_MESSAGES_RECEVIED, CHAT_SET_STATUS} from '../actions/actionTypes';

export type ChatStatusType = 'pending' | 'ready' | 'error'

const initialState = {
    messages: [] as ChatMessageType[],
    status: 'pending' as ChatStatusType
}

export type InitialStateType = typeof initialState

export const chatReducer = (state: InitialStateType = initialState, action: ChatActionType): InitialStateType => {
    switch (action.type) {
        case (CHAT_MESSAGES_RECEVIED): {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages.map(message => ({
                        ...message,
                        id: v1(),
                    })),
                ].filter((_, index, array) => index >= array.length - 100),
            }
        }
        case (CHAT_SET_STATUS): {
            return {
                ...state,
                status: action.payload.status
            }
        }
        default:
            return state
    }
}

