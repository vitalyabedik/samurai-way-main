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

export type UserType = {
    about: AboutType[]
}


export type ProfilePageType = {
    posts: PostType[]
    users: UserType[]
}