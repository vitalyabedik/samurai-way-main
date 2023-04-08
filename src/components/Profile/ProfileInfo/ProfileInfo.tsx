import styles from './ProfileInfo.module.css';

import profileBackground from '../../../assets/images/profile-background.png';

export const ProfileInfo = () => {
    return (
        <div className={styles.root}>
            <div>
                <img src={profileBackground} alt="profile-background"/>
            </div>
            <div>avatar + descr</div>
        </div>
    )
}