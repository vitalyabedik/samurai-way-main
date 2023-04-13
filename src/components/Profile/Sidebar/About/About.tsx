import styles from './About.module.css';

import homeIcon from '../../../../assets/images/profile/about/icon-home.svg';
import globeIcon from '../../../../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../../../../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../../../../assets/images/profile/about/icon-rss.svg';

type AboutType = {
    id: number
    icon: string
    info: string
    description: string
}

type UserAbout = {
    about: Array<AboutType>
}

type UserType = Array<UserAbout>

export const About = () => {
    const userAbout8: UserType = [{
        about: [
            {
                id: 1,
                icon: homeIcon,
                info: 'Live In',
                description: 'Cairo, Egypt'
            },
            {
                id: 2,
                icon: globeIcon,
                info: 'From',
                description: 'Aden, Yemen'
            },
            {
                id: 3,
                icon: heartIcon,
                info: 'From',
                description: 'Relationship'
            },
            {
                id: 4,
                icon: rssIcon,
                info: 'Followed By',
                description: '3,240 People'
            },

        ]
    }]

    const userAbout8Elements = userAbout8[0].about.map(el => {
        return (
            <li key={el.id} className={styles.item}>
                <div className={styles.iconBlock}>
                    <img className={styles.iconImage} src={el.icon} alt="home-icon"/>
                </div>
                <div>{el.info}</div>
                <div className={styles.info}>{el.description}</div>
            </li>
        )
    } )

    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>
            <ul className={styles.items}>
                {userAbout8Elements}
            </ul>
        </div>
    )
}