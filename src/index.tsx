import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/styles.css'
import './index.css';

import {App} from './App/App';
import {state} from './redux/state'

ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);