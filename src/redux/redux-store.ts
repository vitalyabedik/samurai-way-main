import {AnyAction, applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'

import {profileReducer} from './reducers/profileReducer';
import {dialogsReducer} from './reducers/dialogsReducer';
import {asideReducer} from './reducers/asideReducer';
import {currentUserReducer} from './reducers/currentUserReducer';
import {usersReducer} from './reducers/usersReducer';
import {authReducer} from './reducers/authReducer';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {ActionTypes} from './actions/actionCreatorsTypes';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    currentUser: currentUserReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunkType<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    ActionTypes
>
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


