export type UserType = {
    id: number
    avatar: string
    userFirstName: string
    userLastName: string
}

export type UsersType = UserType[]

export type AuthMeType = {
    userId: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}