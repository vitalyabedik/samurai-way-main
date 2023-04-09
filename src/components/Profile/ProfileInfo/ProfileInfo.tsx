import styles from './ProfileInfo.module.css';

import profileCover from '../../../assets/images/profile/profile-cover.jpg';
import avatar8 from '../../../assets/images/profile/avatar-8.jpg';

export const ProfileInfo = () => {
    return (
        <div className={styles.root}>
            <div >
                <img className={styles.profileCover} src={profileCover} alt="profile-cover"/>
            </div>
            <div className={styles.profileContent}>
                <div className={styles.profileAvatar}>
                    <img className={styles.profileAvatar__img} src={avatar8} alt="profile-avatar-8"/>
                    <div className={styles.userStatus}></div>
                </div>
                <div className={styles.profileInfo}>
                    <h1 className={styles.profileInfo__title}> Josephine Williams </h1>
                    <p className={styles.profileInfo__description}> Family , Food , Fashion , Fourever </p>
                </div>
            </div>
        </div>
    )
}