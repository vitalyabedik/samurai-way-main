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
                messages: [...state.messages, ...action.payload.messages]
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

