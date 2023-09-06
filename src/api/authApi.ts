import {BaseResponseType, instance} from './instance';

export const authAPI = {
    me: () => {
        return instance.get<BaseResponseType<MeResponseDataType>>(`auth/me`)
            .then(response => response.data)
    },
    login: (email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) => {
        return instance.post<BaseResponseType<LoginResponseDataType>>(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => response.data)
    },
    logOut: () => {
        return instance.delete<BaseResponseType>(`auth/login`)
            .then(response => response.data)
    },
}

// types
type MeResponseDataType = {
    id: number
    email: string
    login: string
}

type LoginResponseDataType = {
    userId: number
}





