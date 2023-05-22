export type LocationType = {
    city: string,
    country: string
}

export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    id: number,
    followed: boolean,
    photos: PhotosType,
    name: string,
    status: string,
    location?: LocationType
}


export type UsersPageType = {
    users: UserType[]
}