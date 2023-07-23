import {Dispatch} from 'redux'
import {stopSubmit} from 'redux-form';

import {authAPI} from '../../api';
import {setAuthUserDataAC} from '../actions/authAction';
import {FormDataType} from '../../components/Login/Login';
import {AppThunkDispatch, AppThunkType} from '../redux-store';

export const getAuthUserDataThunkCreator = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()

    if (res.resultCode === 0) {
        const {id, email, login} = res.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const loginThunkCreator = (data: FormDataType): AppThunkType => async (dispatch: AppThunkDispatch) => {
    const res = await authAPI.login(data)

    if (res.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator())
    } else {
        const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutThunkCreator = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logOut()

    if (res.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

