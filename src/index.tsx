import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import {state, addPost, addMessage, updateNewMessageText, updateNewPostText, subscriber} from './redux/state'

export const renderTree = () => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}
             addMessage={addMessage}
             updateNewMessageText={updateNewMessageText}
        />,
        document.getElementById('root')
    );
}

renderTree()
subscriber(renderTree)