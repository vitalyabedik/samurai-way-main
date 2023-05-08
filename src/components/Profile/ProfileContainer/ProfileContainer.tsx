import React from 'react';

import {addPostAC, changeNewPostTextAC} from '../../../redux/actions/profileAction';
import {Profile} from '../Profile';
import {StoreContext} from '../../../StoreContext';

export const ProfileContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const onPostChange = (text: string) => {
                        store.dispatch(changeNewPostTextAC(text))
                    }

                    return (
                        <Profile state={state} addPost={addPost} onPostChange={onPostChange}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}