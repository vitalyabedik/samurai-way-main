import {AppStateType} from '../redux-store';

export const getChatMessages = (state: AppStateType) => state.chat.messages

export const getChatStatus = (state: AppStateType) => state.chat.status