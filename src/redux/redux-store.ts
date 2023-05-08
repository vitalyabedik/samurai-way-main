import {combineReducers, createStore} from 'redux';
import {profileReducer} from './reducers/profileReducer';
import {dialogsReducer} from './reducers/dialogsReducer';
import {asideReducer} from './reducers/asideReducer';
import {currentUserReducer} from './reducers/currentUserReducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    aside: asideReducer,
    currentUser: currentUserReducer
})

const store = createStore(reducers)

export type StoreType = typeof store
export default store