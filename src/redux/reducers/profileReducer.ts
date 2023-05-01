import {POST_ADD, POST_UPDATE_NEW_TEXT} from '../actions/actionTypes';
import {PostType, ProfilePageType} from '../../types';
import {ActionTypes} from '../state';

export const profileReducer = (state: ProfilePageType, action: ActionTypes) => {
    switch (action.type) {
        case POST_ADD:
            const newPost: PostType = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case POST_UPDATE_NEW_TEXT:
            state.newPostText = action.newText
            return state;
        default:
            return state;
    }
}