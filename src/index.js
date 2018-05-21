import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './App';
import './index.css';

let route = <Router history={hashHistory}>
    <Route path="/" component={App}/>
</Router>


ReactDOM.render(
    route,
    document.getElementById('root')
);
