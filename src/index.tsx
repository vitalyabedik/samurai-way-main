import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import App from './App/App';
import {store} from './redux/redux-store'
import {BrowserRouter, HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux';


export const renderTree = () => {
    ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
        , document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)
