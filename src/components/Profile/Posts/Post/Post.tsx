import React from 'react';

import styles from './Post.module.css';

type MessageProps = {
    message: string
    likes: number
}

export const Post: React.FC<MessageProps> = (props) => {
    return (
        <div className={styles.item}>
            {props.message}
            <div><span>{props.likes}</span></div>
        </div>
    )
}