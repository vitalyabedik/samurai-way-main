import {BaseResponseType, instance} from './instance';
import {ProfilePhotos, ProfileType} from '../types';

export const profileAPI = {
    getProfile: (userId: number) => {
        return instance.get<ProfileType>(`profile/${userId}`)
        .then(response => response.data)
    },
    getStatus: (userId: string) => {
        return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
    },
    updateStatus: (status: string) => {
        return instance.put<BaseResponseType>(`profile/status`, {status: status})
        .then(response => response.data)
    },
    savePhoto: (photoFile: string) => {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put<BaseResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => response.data)
    },
    updateProfile: (profile: ProfileType) => {
        return instance.put<BaseResponseType>(`profile`, profile)
            .then(response => response.data)
    }
}

// types
type SavePhotoResponseDataType = {
    photos: ProfilePhotos
}

