import {ActionTypes} from '../store';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';

const initialState = {
    id: 1,
    avatar: avatar2,
    userFirstName: 'Erica',
    userLastName: 'Jones'
}

export type InitialCurrentUserStateType = typeof initialState

export const currentUserReducer = (state: InitialCurrentUserStateType = initialState, action: ActionTypes) : InitialCurrentUserStateType => {
    return state
}