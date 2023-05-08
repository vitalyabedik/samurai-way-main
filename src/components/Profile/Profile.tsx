import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {PostForm} from './PostForm';
import {StateType} from '../../redux/store';

type PropsType = {
    state: StateType
    addPost: () => void
    onPostChange: (text: string) => void
}

export const Profile = (props: PropsType) => {
    const {addPost, onPostChange} = props
    const {currentUser, profilePage} = props.state

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostForm state={props.state} addPost={addPost} onPostChange={onPostChange}/>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar}/>
                </div>
            </div>
        </div>
    )
}