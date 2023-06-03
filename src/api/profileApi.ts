import {instance} from './instance';

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    }
}


