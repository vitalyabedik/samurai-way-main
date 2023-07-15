import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {getAuthUserDataThunkCreator} from './authThunk';
import {setAppInitializedAC} from '../actions/appAction';

export const inititializeThunkCreator = (): AppThunkType => {
    return (dispatch: AppThunkDispatch) => {
        const promise = dispatch(getAuthUserDataThunkCreator())

        promise.then(() => {
            dispatch(setAppInitializedAC())
        })
    }
}



