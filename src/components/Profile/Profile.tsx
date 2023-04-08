import styles from './Profile.module.css';

import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';


export const Profile = () => {
    return (
        <div className={styles.root}>
            <ProfileInfo/>
            <Posts/>
        </div>
    )
}