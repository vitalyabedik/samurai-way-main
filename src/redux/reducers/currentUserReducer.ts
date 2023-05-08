import { UserType,} from '../../types';
import {ActionTypes} from '../store';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';


const initialState: UserType = {
    id: 1,
    avatar: avatar2,
    userFirstName: 'Erica',
    userLastName: 'Jones'
}

export const currentUserReducer = (state = initialState, action: ActionTypes) => {
    return state
}