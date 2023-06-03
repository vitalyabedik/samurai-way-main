import {instance} from './instance';

export const authAPI = {
    checkAuth: () => {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}


