import {instance} from './instance';
import {ProfileType} from '../types';

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
    savePhoto: (photoFile: string) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data)
    },
    updateProfile: (profile: ProfileType) => {
        return instance.put(`profile`, profile)
    }
}


