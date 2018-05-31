import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import SingleBook from './components/single_book/SingleBook';
import TextList from './components/text_list/TextList'
import BookList from './components/book_list/BookList'
import './index.css';
import fetch from "isomorphic-fetch";

fetch("./book_data.json", {
    method: 'GET'
})
    .then(
        function (response) {
            if (response.status !== 200) {
                console.log("存在一个问题，状态码为：" + response.status);
                return;
            }
            response.json().then(function (data) {
                // console.log("data......", data)
                window.bookData = data;


                let route = <Router history={hashHistory}>
                    <Route path="/" component={BookList}>
                        <Route path="/book-item/:bookId" components={SingleBook}>
                            <Route path="/book-item/:bookId/text-list/:textId" components={TextList}/>
                        </Route>
                    </Route>
                </Router>

                ReactDOM.render(
                    route,
                    document.getElementById('root')
                );
            });
        }
    )
    .catch(function (err) {
        console.log("Fetch错误:" + err);
    });






