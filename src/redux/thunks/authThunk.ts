import {Dispatch} from 'redux'
import {AppThunkDispatch, AppThunkType} from '../redux-store';

import {authAPI} from '../../api';
import {getCaptchaUrlAC, setAuthUserDataAC} from '../actions/authAction';
import {securityAPI} from '../../api/securityApi';
import {ResultCode} from '../../api/instance';


export const getAuthUserDataTC = () => async (dispatch: Dispatch) => {
    const meData = await authAPI.me()

    if (meData.resultCode === ResultCode.SUCCESS) {
        const {id, email, login} = meData.data
        dispatch(setAuthUserDataAC(id, email, login, true))
    }

}

export const loginThunkCreator = (email: string, password: string, rememberMe: boolean, captcha: string | null): AppThunkType => async (dispatch: AppThunkDispatch) => {
    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(getAuthUserDataTC())
    } else if (data.resultCode === ResultCode.CAPTCHA_ERROR) {
            dispatch(getCaptchaUrlTC())
        }

        // const message = res.messages.length > 0 ? res.messages[0] : 'Some error'
        // dispatch(stopSubmit('login', {_error: message}))
}

export const getCaptchaUrlTC = () => async (dispatch: Dispatch) => {
    const data = await securityAPI.getCaptchaUrl()

    const captchaUrl = data.url
    dispatch(getCaptchaUrlAC(captchaUrl))
}

export const logoutTC = () => async (dispatch: Dispatch) => {
    const data = await authAPI.logOut()

    if (data.resultCode === ResultCode.SUCCESS) {
        dispatch(setAuthUserDataAC(null, null, null, false))
    }
}

