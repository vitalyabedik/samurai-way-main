import styles from './NotFound404.module.css';

import notFound404Image from '../../../assets/images/something-lost.png'

export const NotFound404 = () => {
    return (
        <div className={styles.root}>
            <img className={styles.img} src={notFound404Image} alt='not-found-404'/>
            <h1 className={styles.title}>Oops, looks like the page is lost.</h1>
            <p className={styles.text}>This is not a fault, just an accident that was not intentional.</p>
        </div>
    );
};

