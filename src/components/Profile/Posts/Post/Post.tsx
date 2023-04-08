import styles from './Post.module.css';

type MessageProps = {
    message: string
    likes: number
}

export const Post = (props: MessageProps) => {
    return (
        <div className={styles.item}>
            {props.message}
            <div>
                <span>{props.likes}</span>
            </div>
        </div>
    )
}