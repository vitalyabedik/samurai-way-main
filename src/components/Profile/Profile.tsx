import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {FormDataType, PostFormRedux} from './PostForm';
import {ProfilePropsType} from './ProfileContainer';
import React from 'react';
import {PostHeader} from './Posts/Post/PostHeader';

export const Profile = (props: ProfilePropsType) => {
    const {profile, status, updateUserStatus} = props
    const {currentUser, profilePage} = props

    const onAddPost = (values: FormDataType) => {
        props.addPost(values.newPostText)
    }

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus}/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <div className={styles.postForm}>
                            <div className={styles.imgAndTextarea}>
                                <PostHeader currentUser={props.currentUser} showMore={false}/>
                                <PostFormRedux onSubmit={onAddPost}/>
                            </div>
                        </div>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar} profile={profile}/>
                </div>
            </div>
        </div>
    )
}