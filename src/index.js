import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Main from './Main/index';
import './assets/App.css';
const history = createBrowserHistory();

ReactDOM.render((
    <Router history={history} >
        <Main history={history} />
    </Router>
), document.getElementById('root'));