import {POST_ADD, POST_UPDATE_NEW_TEXT} from './actionTypes';

export type PostActionType = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostTextAC>

export const addPostAC = () => ({
    type: POST_ADD
} as const)

export const changeNewPostTextAC = (newText: string) => ({
    type: POST_UPDATE_NEW_TEXT,
    newText
} as const);