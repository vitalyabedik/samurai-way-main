import {combineReducers, createStore} from 'redux';

import {profileReducer} from './reducers/profileReducer';
import {dialogsReducer} from './reducers/dialogsReducer';
import {asideReducer} from './reducers/asideReducer';
import {currentUserReducer} from './reducers/currentUserReducer';
import {usersReducer} from './reducers/usersReducer';
import {authReducer} from './reducers/authReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    aside: asideReducer,
    currentUser: currentUserReducer,
    auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


