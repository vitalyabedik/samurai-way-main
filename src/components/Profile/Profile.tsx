import styles from './Profile.module.css';

import {Posts} from './Posts/Posts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {Sidebar} from './Sidebar/Sidebar';


export const Profile = () => {
    return (
        <div className={styles.root}>
            <ProfileInfo/>
            <div className={styles.items}>
                <Posts/>
                <Sidebar/>
            </div>
        </div>
    )
}