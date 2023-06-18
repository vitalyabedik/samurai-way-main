import {instance} from './instance';

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
            .then(response => response.data)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    },
}


