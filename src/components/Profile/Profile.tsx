import React from 'react';

import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {FormDataType, PostFormRedux} from './PostForm';
import {PostHeader} from './Posts/Post/PostHeader';
import {ProfileType} from '../../types';
import {InitialStateType} from '../../redux/reducers/profileReducer';
import {ProfileDataFormType} from '../Profile/ProfileDataForm';
import {UserType} from '../../types/usersPageTypes';

type PropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    status: string
    isOwner: boolean
    addPost: (newPostText: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
    updateProfile: (profile: ProfileDataFormType) => Promise<any>
    friends: UserType[]
}

export const Profile = (props: PropsType) => {
    const {
        profile,
        status,
        profilePage,
        isOwner,
        updateUserStatus,
        addPost,
        savePhoto,
        updateProfile,
        friends
    } = props

    const onAddPost = (values: FormDataType) => {
        addPost(values.newPostText)
    }

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo isOwner={isOwner}
                             profile={profile}
                             status={status}
                             updateUserStatus={updateUserStatus}
                             savePhoto={savePhoto}
                />
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <div className={styles.postForm}>
                            <div className={styles.imgAndTextarea}>
                                <PostHeader profile={profile} showMore={false}/>
                                <PostFormRedux onSubmit={onAddPost}/>
                            </div>
                        </div>
                        <Posts profile={profile} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar}
                             profile={profile}
                             isOwner={isOwner}
                             updateProfile={updateProfile}
                             friends={friends}
                    />
                </div>
            </div>
        </div>
    )
}