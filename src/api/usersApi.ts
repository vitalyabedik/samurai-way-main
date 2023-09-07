import {BaseResponseType, instance} from './instance';
import {UserType} from '../types/usersPageTypes';

export const usersAPI = {
    getUsers: (pageNumber: number = 1, pageSize: number = 10, isFriend: {value: boolean} | undefined = undefined) => {
        const friendParam = isFriend ? `&friend=${isFriend.value}` : ''
        return instance.get<UsersResponseDataType>(`users?page=${pageNumber}&page=${pageSize}${friendParam}`)
            .then(response => response.data)
    },
    follow: (userId: number) => {
        return instance.post<BaseResponseType>(`follow/${userId}`, {})
            .then(response => response.data)
    },
    unFollow: (userId: number) => {
        return instance.delete<BaseResponseType>(`follow/${userId}`)
            .then(response => response.data)
    },
}

// types
type UsersResponseDataType = {
    items: UserType[]
    totalCount: number
    error: string
}


