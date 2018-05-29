import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/app/App.js';
import TextList from './components/text_list/TextList'
import './index.css';

let route = <Router history={hashHistory}>
    <Route path="/" component={App}>
        <Route path="/text-list/:id" components={TextList}/>
    </Route>
</Router>


ReactDOM.render(
    route,
    document.getElementById('root')
);
