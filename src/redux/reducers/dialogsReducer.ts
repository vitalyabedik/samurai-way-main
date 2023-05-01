import {MESSAGES_ADD, MESSAGES_UPDATE_NEW_TEXT} from '../actions/actionTypes';
import {DialogsPageType, MessageType} from '../../types';
import {ActionTypes} from '../state';

export const dialogsReducer = (state: DialogsPageType, action: ActionTypes) => {
    switch (action.type) {
        case MESSAGES_ADD:
            const newMessage: MessageType = {
                id: 9,
                message: state.newMessageText,
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state;
        case MESSAGES_UPDATE_NEW_TEXT:
            state.newMessageText = action.newMessageText
            return state;
        default:
            return state;
    }
}