import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import store from './redux/redux-store'
import {BrowserRouter} from 'react-router-dom';
import {Provider} from './StoreContext';

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
        , document.getElementById('root')
    );
}

renderTree()
store.subscribe(renderTree)
