import styles from './UsersFilteredButtons.module.css'

export const UsersFilteredButtons = () => {
    return (
        <div className={styles.root}>
            <button className={styles.button}>All</button>
            <button className={styles.button}>Followed</button>
            <button className={styles.button}>Unfollowed</button>
        </div>
    );
};

