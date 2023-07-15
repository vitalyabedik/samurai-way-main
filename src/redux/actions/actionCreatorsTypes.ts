import {AppActionType} from './appAction';
import {ProfileActionType} from './profileAction';
import {DialogsActionType} from './dialogsAction';
import {UsersActionType} from './usersAction';
import {AuthActionType} from './authAction';

export type ActionTypes = ProfileActionType
    | AppActionType
    | DialogsActionType
    | UsersActionType
    | AuthActionType