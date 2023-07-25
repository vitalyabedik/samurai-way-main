import {instance} from './instance';

export const usersAPI = {
    getUsers: (pageNumber: number = 1, pageSize: number = 10) => {
        return instance.get(`users?page=${pageNumber}&page=${pageSize}`)
    },
    follow: (userId: number) => {
        return instance.post(`follow/${userId}`, {})
    },
    unFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    }
}


