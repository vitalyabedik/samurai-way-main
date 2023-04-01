import React from 'react';

import styles from './Post.module.css';

export const Post: React.FC = () => {
    return (
        <div className={styles.item}>
            Post
            <div><span>Like</span></div>
        </div>
    )
}