import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import styles from './Chat.module.css'

import {ChatMessages} from './ChatMessages';
import {ChatForm} from './ChatForm/ChatForm';
import {startChatMessagesListeningTC, stopChatMessagesListeningTC} from '../../redux/thunks/chatThunk';
import {getChatStatus} from '../../redux/selectors/chatSelector';
import {Preloader} from '../common/Preloader';


const Chat: React.FC = () => {
    const status = useSelector(getChatStatus)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startChatMessagesListeningTC())

        return () => {
            dispatch(stopChatMessagesListeningTC())
        }
    }, [])


    if (status === 'pending') return <Preloader />

    return (
        <div className={styles.root}>
            <div className={styles.messages}>
                {status === 'error' && <div>Some error occured, Please Refresh the page!</div>}
                <ChatMessages />
                <ChatForm />
            </div>
        </div>
    )
}

export default Chat