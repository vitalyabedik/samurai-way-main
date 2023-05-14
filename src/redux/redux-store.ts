import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profileReducer';
import {dialogsReducer} from './reducers/dialogsReducer';
import {asideReducer} from './reducers/asideReducer';
import {currentUserReducer} from './reducers/currentUserReducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer,
    currentUser: currentUserReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)


