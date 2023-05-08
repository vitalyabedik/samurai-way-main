import React from 'react';

import {addMessageAC, changeNewMessageTextAC} from '../../../redux/actions/dialogsAction';
import {StoreType} from '../../../redux/redux-store';
import {DialogsForm} from '../DialogsForm';

type PropsType = {
    store: StoreType
}

export const DialogsFormContainer = (props: PropsType) => {
    const state = props.store.getState()
    const {dispatch} = props.store

    const sendMessage = () => {
        dispatch(addMessageAC())
    }

    const onMessageChange = (text: string) => {
        dispatch(changeNewMessageTextAC(text))
    }

    return (
        <DialogsForm state={state} sendMessage={sendMessage} onMessageChange={onMessageChange} />
    )
}



