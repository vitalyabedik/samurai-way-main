import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {PostForm} from './PostForm';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {ActionTypes, StateType} from '../../redux/state';

type PropsType = {
    state: StateType
    dispatch: (action: ActionTypes) => void
}

export const Profile = (props: PropsType) => {
    const {state, dispatch} = props
    const {currentUser, profilePage} = props.state

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostForm state={state} dispatch={dispatch}/>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar}/>
                </div>
            </div>
        </div>
    )
}