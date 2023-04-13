import styles from './Profile.module.css';

import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Sidebar} from './Sidebar/Sidebar';

export const Profile = () => {
    const posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 4},
        {id: 2, message: 'It\'s my first post?', likesCount: 10},
    ]

    return (
        <div className={styles.root}>
            <ProfileInfo/>
            <div className={styles.items}>
                <Posts posts={posts}/>
                <Sidebar/>
            </div>
        </div>
    )
}