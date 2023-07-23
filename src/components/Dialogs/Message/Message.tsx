import styles from './Message.module.css'

type PropsType = {
    id: number
    message: string
}

export const MessageItem = (props: PropsType) => {
    const {message} = props

    return (
        <div className={styles.root}>
            {message}
        </div>
    )
}

