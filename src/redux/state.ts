import homeIcon from '../assets/images/profile/about/icon-home.svg';
import globeIcon from '../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../assets/images/profile/about/icon-rss.svg';

import {ProfilePageType, DialogsPageType} from '../types';

export type StateType = {
    profilePage : ProfilePageType
    dialogsPage: DialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 4},
            {id: 2, message: 'It\'s my first post?', likesCount: 10},
        ],
        users: [{
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

            ]
        }],
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

