import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import {store} from './redux/state'
import {BrowserRouter} from 'react-router-dom';

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)