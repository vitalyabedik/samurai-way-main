import {
    PROFILE_GET_STATUS,
    PROFILE_PHOTO_SAVE_SUCCESS,
    PROFILE_POST_ADD,
    PROFILE_POST_DELETE,
    PROFILE_SET_USER_PROFILE
} from '../actions/actionTypes';
import {PostType, ProfileType, SidebarType} from '../../types';
import {ActionTypes} from '../actions/actionCreatorsTypes';

import homeIcon from '../../assets/images/profile/about/icon-home.svg';
import globeIcon from '../../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../../assets/images/profile/about/icon-rss.svg';

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

        ],
    } as SidebarType,
    profile: null as ProfileType | null,
    status: ''
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PROFILE_POST_ADD:
            const newPost: PostType = {
                id: 3,
                message: action.payload.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case PROFILE_POST_DELETE:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload.postId),
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
        case PROFILE_PHOTO_SAVE_SUCCESS:
            return {
                ...state,
                profile: state.profile
                    ? {...state.profile, photos: action.payload.photos}
                    : null
            }
        default:
            return state;
    }
}