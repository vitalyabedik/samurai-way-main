import styles from './Profile.module.css';

import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Posts} from './Posts/Posts';
import {Sidebar} from './Sidebar/Sidebar';
import {StoreType} from '../../redux/redux-store';
import {PostFormContainer} from './PostFormContainer';

type PropsType = {
    store: StoreType
}

export const Profile = (props: PropsType) => {
    const state = props.store.getState()
    const {currentUser, profilePage} = state

    return (
        <div className={styles.root}>
            <div className={styles.content}>
                <ProfileInfo/>
                <div className={styles.items}>
                    <div className={styles.timeline}>
                        <PostFormContainer store={props.store}/>
                        <Posts currentUser={currentUser} posts={profilePage.posts}/>
                    </div>
                    <Sidebar state={profilePage.sidebar}/>
                </div>
            </div>
        </div>
    )
}