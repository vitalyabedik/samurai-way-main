import {UsersType} from './usersTypes';

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type AboutType = {
    id: number
    icon: string
    info: string
    description: string
}

export type FriendsType = {
    count: string
    list: UsersType
}

export type SidebarType = {
    about: AboutType[]
    friends: FriendsType
}

export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    sidebar: SidebarType
}