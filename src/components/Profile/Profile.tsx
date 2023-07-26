import React from 'react';

import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {FormDataType, PostFormRedux} from './PostForm';
import {ProfilePropsType} from './ProfileContainer/ProfileContainer';
import {PostHeader} from './Posts/Post/PostHeader';
import {ProfileType} from '../../types';
import {InitialStateType} from '../../redux/reducers/profileReducer';
import {InitialCurrentUserStateType} from '../../redux/reducers/currentUserReducer';

type PropsType = {
    profilePage: InitialStateType
    profile: ProfileType | null
    currentUser: InitialCurrentUserStateType
    status: string
    isOwner: boolean
    addPost: (newPostText: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: (file: File) => void
}

export const Profile = (props: PropsType) => {
    const {
        profile,
        currentUser,
        status,
        profilePage,
        isOwner,
        updateUserStatus,
        addPost,
        savePhoto
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
                                <PostHeader currentUser={currentUser} showMore={false}/>
                                <PostFormRedux onSubmit={onAddPost}/>
                            </div>
                        </div>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar} profile={profile} isOwner={isOwner}/>
                </div>
            </div>
        </div>
    )
}