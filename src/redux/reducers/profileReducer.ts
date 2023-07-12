import {POST_ADD, PROFILE_GET_STATUS, PROFILE_SET_USER_PROFILE} from '../actions/actionTypes';
import {PostType, ProfileType, SidebarType} from '../../types';
import {ActionTypes} from '../store';

import homeIcon from '../../assets/images/profile/about/icon-home.svg';
import globeIcon from '../../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../../assets/images/profile/about/icon-rss.svg';

import avatar1 from '../../assets/images/profile/avatars/avatar-1.jpg';
import avatar2 from '../../assets/images/profile/avatars/avatar-2.jpg';
import avatar3 from '../../assets/images/profile/avatars/avatar-3.jpg';
import avatar4 from '../../assets/images/profile/avatars/avatar-4.jpg';
import avatar5 from '../../assets/images/profile/avatars/avatar-5.jpg';
import avatar6 from '../../assets/images/profile/avatars/avatar-6.jpg';
import avatar7 from '../../assets/images/profile/avatars/avatar-7.jpg';
import avatar8 from '../../assets/images/profile/avatars/avatar-8.jpg';

const initialState = {
    posts: [
        {
            id: 1,
            message: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim laoreet dolore magna aliquam erat volutpat`,
            likesCount: 4
        },
        {
            id: 2,
            message: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    Ut wisi enim ad minim laoreet dolore magna aliquam erat volutpat`,
            likesCount: 10
        },
    ] as PostType[],
    sidebar: {
        about: [
            {
                id: 1,
                icon: homeIcon,
                info: 'Live In',
                description: ''
            },
            {
                id: 2,
                icon: globeIcon,
                info: 'From',
                description: 'Aden, Yemen'
            },
            {
                id: 3,
                icon: heartIcon,
                info: 'From',
                description: 'Relationship'
            },
            {
                id: 4,
                icon: rssIcon,
                info: 'Followed By',
                description: '3,240 People'
            },

        ] ,
        friends: {
            count: '34510',
            list: [
                {
                    id: 1,
                    avatar: avatar1,
                    userFirstName: 'Dennis',
                    userLastName: 'Han'
                },
                {
                    id: 2,
                    avatar: avatar2,
                    userFirstName: 'Erica',
                    userLastName: 'Jones'
                },
                {
                    id: 3,
                    avatar: avatar3,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove'
                },
                {
                    id: 4,
                    avatar: avatar4,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove'
                },
                {
                    id: 5,
                    avatar: avatar5,
                    userFirstName: 'Dennis',
                    userLastName: 'Han'
                },
                {
                    id: 6,
                    avatar: avatar6,
                    userFirstName: 'Alex',
                    userLastName: 'Dolgove'
                },
                {
                    id: 7,
                    avatar: avatar7,
                    userFirstName: 'Stella',
                    userLastName: 'Johnson'
                },
                {
                    id: 8,
                    avatar: avatar8,
                    userFirstName: 'Dennis',
                    userLastName: 'Han'
                },
            ],
        }
    } as SidebarType,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state:InitialStateType = initialState, action: ActionTypes):InitialStateType => {
    switch (action.type) {
        case POST_ADD:
            const newPost: PostType = {
                id: 3,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case PROFILE_SET_USER_PROFILE:
            return {
                ...state,
                profile: action.payload.profile
            }
        case PROFILE_GET_STATUS:
            return {
                ...state,
                status: action.payload.status
            }
        default:
            return state;
    }
}