import styles from './Message.module.css'

type PropsType = {
    id: number
    message: string
}

export const MessageItem = (props: PropsType) => {
    return (
        <div className={styles.root}>
            {props.message}
        </div>
    )
}

