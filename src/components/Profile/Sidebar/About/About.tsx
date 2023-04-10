import styles from './About.module.css';

import homeIcon from '../../../../assets/images/profile/about/icon-home.svg';
import globeIcon from '../../../../assets/images/profile/about/icon-globe.svg';
import heartIcon from '../../../../assets/images/profile/about/icon-heart.svg';
import rssIcon from '../../../../assets/images/profile/about/icon-rss.svg';

export const About = () => {
    return (
        <div className={styles.root}>
            <h4 className={styles.sidebar__title}>About</h4>
            <ul className={styles.items}>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={homeIcon} alt="home-icon"/>
                    </div>
                    <div>Live In</div>
                    <div className={styles.info}> Cairo , Egypt</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={globeIcon} alt="home-icon"/>
                    </div>
                    <div>From</div>
                    <div className={styles.info}>Aden , Yemen</div>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={heartIcon} alt="home-icon"/>
                    </div>
                    <div>From</div>
                    <div className={styles.info}>Relationship  </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.iconBlock}>
                        <img className={styles.iconImage} src={rssIcon} alt="home-icon"/>
                    </div>
                    <div>Followed By</div>
                    <div className={styles.info}>3,240 People  </div>
                </li>
            </ul>
        </div>
    )
}