import {Dispatch} from 'redux';

import {chatAPI, ChatMessageType} from '../../api/chatApi';
import {chatMessagesReceivedAC, chatSetStatusAC} from '../actions/chatActions';
import {ChatStatusType} from '../reducers/chatReducer';

let _newChatMessageCreator: ((messages: ChatMessageType[]) => void) | null = null
const newChatMessageCreator = (dispatch: Dispatch) => {
    if (_newChatMessageCreator === null) {
        _newChatMessageCreator = (messages) => {
            dispatch(chatMessagesReceivedAC(messages))
        }
    }

    return _newChatMessageCreator
}

let _statusChangedCreator: ((status: ChatStatusType) => void) | null = null
const statusChangedCreator = (dispatch: Dispatch) => {
    if (_statusChangedCreator === null) {
        _statusChangedCreator= (status) => {
            dispatch(chatSetStatusAC(status))
        }
    }

    return _statusChangedCreator

}

export const startChatMessagesListeningTC = () => async (dispatch: Dispatch) => {
    chatAPI.start()
    chatAPI.subscribe('messages-received', newChatMessageCreator(dispatch))
    chatAPI.subscribe('status-changed', statusChangedCreator(dispatch))
}

export const stopChatMessagesListeningTC = () => async (dispatch: Dispatch) => {
    chatAPI.unSubscribe('messages-received', newChatMessageCreator(dispatch))
    chatAPI.unSubscribe('status-changed', statusChangedCreator(dispatch))
    chatAPI.stop()
}

export const sendChatMessageTC = (message: string) => async (dispatch: Dispatch) => {
    chatAPI.sendMessage(message)
}


