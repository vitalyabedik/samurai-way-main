import styles from './Profile.module.css';

import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Sidebar} from './Sidebar/Sidebar';
import {ProfilePageType} from '../../types';

type PropsType = {
    state: ProfilePageType
}

export const Profile = (props: PropsType) => {

    return (
        <div className={styles.root}>
            <ProfileInfo />
            <div className={styles.items}>
                <Posts posts={props.state.posts}/>
                <Sidebar state={props.state.sidebar}/>
            </div>
        </div>
    )
}