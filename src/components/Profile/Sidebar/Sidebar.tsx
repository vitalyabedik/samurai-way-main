import styles from './Sidebar.module.css'

import {About} from './About/About';
import {Friends} from './Friends/Friends';

export const Sidebar = () => {
    return (
        <div className={styles.root}>
            <About/>
            <Friends/>
        </div>
    )
}