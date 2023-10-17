import {memo} from 'react';
import {NavLink} from 'react-router-dom';

import styles from './ChatMessage.module.css'

import {ChatMessageType} from '../../../../api/chatApi';

type PropsType = {
    id: number
    message: ChatMessageType
}

export const ChatMessage = memo((props: PropsType) => {
    const {id, message} = props

    let path = `/chat/${id}`

    return (
            <div className={styles.root}>
                <NavLink key={message.userId} to={path}>
                    <li className={styles.item}>
                        <div className={styles.item__image}>
                            <img className={styles.item__avatar} src={message.photo} alt="contact-avatar"/>
                        </div>
                        <div className={styles.userAndMessage}>
                            <div className={styles.item__userName}>
                                {`${message.userName}`}
                            </div>
                            <div className={styles.userMessage}>
                                {message.message}
                            </div>
                        </div>
                    </li>
                </NavLink>
            </div>
    )
})


