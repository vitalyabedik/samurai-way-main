import {Dispatch} from 'redux'
import {AppThunkDispatch, AppThunkType} from '../redux-store';
import {stopSubmit} from 'redux-form';

import {authAPI} from '../../api';
import {getCaptchaUrlAC, setAuthUserDataAC} from '../actions/authAction';
import {LoginFormDataType} from '../../components/Login/Login';
import {securityAPI} from '../../api/securityApi';


export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.me()

    if (res.resultCode === 0) {
        const {id, email, login} = res.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const loginThunkCreator = (data: LoginFormDataType): AppThunkType => async (dispatch: AppThunkDispatch) => {
    const res = await authAPI.login(data)

    if (res.resultCode === 0) {
        dispatch(getAuthUserDataTC())
    } else {
        if (res.resultCode === 10) {
            dispatch(getCaptchaUrlTC())
        }

        const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}

// export const loginThunkCreator = (data: LoginFormDataType): AppThunkType => async (dispatch: AppThunkDispatch) => {
//     debugger
//     const res = await authAPI.login(data)
//
//     if (res.resultCode === 0) {
//         debugger
//         dispatch(getAuthUserDataTC())
//     } else {
//         const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
//         dispatch(stopSubmit('login', {_error: message}))
//     }
// }

export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    const res = await securityAPI.getCaptchaUrl()

    const captchaUrl = res.data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const res = await authAPI.logOut()

    if (res.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

