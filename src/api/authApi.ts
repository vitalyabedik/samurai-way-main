import {instance} from './instance';
import {FormDataType} from '../components/Login';

export const authAPI = {
    me: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login: (data: FormDataType) => {
        return instance.post(`auth/login`, data)
            .then(response => response.data)
    },
    logOut: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },
}


