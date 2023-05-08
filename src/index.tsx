import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import store from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}
                 dispatch={store.dispatch.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)
