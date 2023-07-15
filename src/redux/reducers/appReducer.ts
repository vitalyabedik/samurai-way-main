import {APP_INITIALIZED} from '../actions/actionTypes';
import {AppActionType} from '../actions/appAction';

export type AppType = {
    isInitialized: boolean
}


let initialState: AppType = {
    isInitialized: false
}

export type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionType): InitialStateType => {
    switch (action.type) {
        case (APP_INITIALIZED): {
            return {
                ...state,
                isInitialized: true
            }
        }
        default:
            return state
    }
}

