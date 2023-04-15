import styles from './Profile.module.css';

import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Sidebar} from './Sidebar/Sidebar';
import {PostsType, UsersType} from '../../index';

type PropsType = {
    posts: PostsType
    users: UsersType
}

export const Profile = (props: PropsType) => {

    return (
        <div className={styles.root}>
            <ProfileInfo />
            <div className={styles.items}>
                <Posts posts={props.posts}/>
                <Sidebar users={props.users}/>
            </div>
        </div>
    )
}