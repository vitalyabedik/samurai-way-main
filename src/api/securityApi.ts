import {instance} from './instance';

export const securityAPI = {
    getCaptchaUrl: () => {
        return instance.get<GetCaptchaUrlResponseType>('security/get-captcha-url')
            .then(response => response.data)
    },
}

// types
type GetCaptchaUrlResponseType = {
    url: string
}


