import styles from './About.module.css';

import { UsersType} from '../../../../index';

type PropsType = {
    users: UsersType
}

export const About = (props: PropsType) => {
    const userAboutElements = props.users[0].about.map(user => {
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
                {userAboutElements}
            </ul>
        </div>
    )
}