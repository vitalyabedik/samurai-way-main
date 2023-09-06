export type LocationType = {
    city: string,
    country: string
}

export type PhotosType = {
    small: string,
    large: string
}

export type UserType = {
    name: string,
    id: number,
    photos: PhotosType,
    status: string,
    followed: boolean,
    location?: LocationType
}


export type UsersPageType = {
    users: UserType[]
}