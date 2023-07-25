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


type ProfileContacts = {
    'facebook': string | null,
    'website': string | null
    'vk': string | null
    'twitter': string | null
    'instagram': string | null
    'youtube': string | null
    'github': string | null
    'mainLink': string | null
}

export type ProfilePhotos = {
    small: string
    large: string
}

export type ProfileType = {
    'aboutMe': string,
    'contacts': ProfileContacts,
    'lookingForAJob': boolean
    'lookingForAJobDescription': string
    'fullName': string
    'userId': number
    'photos': ProfilePhotos
}


export type ProfilePageType = {
    posts: PostType[]
    newPostText: string
    sidebar: SidebarType
    profile: ProfileType | null
}



