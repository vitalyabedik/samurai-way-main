import styles from './About.module.css';

import homeIcon from '../../../../assets/images/profile/about/icon-home.svg';
import globeIcon from '../../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../../assets/images/profile/about/icon-rss.svg';
import {AboutType, ProfileType} from '../../../../types/profilePageTypes';

type PropsType = {
    about: AboutType[]
    profile: ProfileType | null
}

export const About = (props: PropsType) => {
    const {profile} = props

    const userAboutElements = props.about.map(user => {
        return (
            <li key={user.id} className={styles.item}>
                <div className={styles.iconBlock}>
                    <img className={styles.iconImage} src={user.icon} alt="home-icon"/>
                </div>
                <div>{user.info}</div>
                <div className={styles.info}>{user.description}</div>
            </li>
        )
    } )

    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>
            <ul className={styles.items}>
                  <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{!profile?.lookingForAJob ? profile?.lookingForAJob : "No"}</div>
                </li>
                {profile?.lookingForAJob && <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>Looking for a job:</div>
                    <div className={styles.info}>{profile?.lookingForAJobDescription}</div>
                </li>}
                {profile?.contacts.facebook && <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>facebook:</div>
                    <div className={styles.info}>{profile?.contacts.facebook}</div>
                </li>}
            </ul>
        </div>
    )
}