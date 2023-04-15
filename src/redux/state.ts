import homeIcon from '../assets/images/profile/about/icon-home.svg';
import globeIcon from '../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../assets/images/profile/about/icon-rss.svg';

import avatar1 from '../assets/images/profile/avatars/avatar-1.jpg'
import avatar2 from '../assets/images/profile/avatars/avatar-2.jpg'
import avatar3 from '../assets/images/profile/avatars/avatar-3.jpg'
import avatar4 from '../assets/images/profile/avatars/avatar-4.jpg'
import avatar5 from '../assets/images/profile/avatars/avatar-5.jpg'
import avatar6 from '../assets/images/profile/avatars/avatar-6.jpg'
import avatar7 from '../assets/images/profile/avatars/avatar-7.jpg'
import avatar8 from '../assets/images/profile/avatars/avatar-8.jpg'


import {ProfilePageType, DialogsPageType, AsideType} from '../types';

export type StateType = {
    aside: AsideType
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    aside: {
        contacts: [
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
                userFirstName: 'Stella',
                userLastName: 'Johnson'
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
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 4},
            {id: 2, message: 'It\'s my first post?', likesCount: 10},
        ],
        sidebar: {
            about: [
                {
                    id: 1,
                    icon: homeIcon,
                    info: 'Live In',
                    description: 'Cairo, Egypt'
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
                        userFirstName: 'Stella',
                        userLastName: 'Johnson'
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
        },
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dennis Han'},
            {id: 2, name: 'Erica Jones'},
            {id: 3, name: 'Alex Dolgove'},
            {id: 4, name: 'Alex Dolgove'},
            {id: 5, name: 'Stella Johnson'},
            {id: 6, name: 'Alex Dolgove'},
            {id: 7, name: 'Stella Johnson'},
            {id: 8, name: 'Dennis Han'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you?'},
            {id: 4, message: 'What happened?'},
            {id: 5, message: 'How can i do it?'},
            {id: 6, message: 'Yo'},
            {id: 7, message: 'Hello'},
            {id: 8, message: 'How are you?'},
        ]
    },
};

