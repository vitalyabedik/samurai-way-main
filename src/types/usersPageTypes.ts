export type LocationType = {
    city: string,
    country: string
}

export type UserType = {
    id: number,
    followed: boolean,
    avatar: string,
    userFirstName: string,
    userLastName: string,
    status: string,
    location: LocationType
}


export type UsersPageType = {
    users: UserType[]
}