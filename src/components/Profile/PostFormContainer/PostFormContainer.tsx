import React from 'react';

import {addPostAC, changeNewPostTextAC} from '../../../redux/actions/profileAction';
import {PostForm} from '../PostForm';
import {StoreType} from '../../../redux/redux-store';

type PropsType = {
    store: StoreType
}

export const PostFormContainer = (props: PropsType) => {
    const {dispatch} = props.store
    const state = props.store.getState()

    const addPost = () => {
        dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        dispatch(changeNewPostTextAC(text))
    }

    return (
        <PostForm state={state} addPost={addPost} onPostChange={onPostChange}/>
    )
}