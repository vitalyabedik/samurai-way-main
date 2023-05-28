import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {PostForm} from './PostForm';
import {ProfilePropsType} from './ProfileContainer';

export const Profile = (props: ProfilePropsType) => {
    const {profile, addPost, onPostChange} = props
    const {currentUser, profilePage} = props

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo profile={profile}/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostForm profilePage={profilePage} currentUser={currentUser} addPost={addPost} onPostChange={onPostChange}/>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar} profile={profile}/>
                </div>
            </div>
        </div>
    )
}