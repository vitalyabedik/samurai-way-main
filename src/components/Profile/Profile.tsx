import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostForm} from './PostForm';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {StateType} from '../../redux/state';

type PropsType = {
    state: StateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

export const Profile = (props: PropsType) => {
    const {state, addPost, updateNewPostText} = props
    const {currentUser, profilePage} = props.state

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostForm state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar}/>
                </div>
            </div>
        </div>
    )
}