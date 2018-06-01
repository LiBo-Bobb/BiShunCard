import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import SingleBook from './components/single_book/SingleBook';
import WordList from './components/WordList/WordList'
import BookList from './components/book_list/BookList'
import PressList from './components/press_list/PressList'
import './index.css';
import fetch from "isomorphic-fetch";


fetch("/book_data.json", {
    method: 'GET'
}).then(
        function (response) {
            if (response.status !== 200) {
                console.log("存在一个问题，状态码为：" + response.status);
                return;
            }
            // console.log(response)
            response.json().then(function (data) {
                // console.log("data......", data)

                // http://192.168.100.60:3000/#/press/abc
                // http://192.168.100.60:3000/#/press/abc/book/b123
                // http://192.168.100.60:3000/#/press/abc/book/b123/words
                // http://192.168.100.60:3000/#/press/abc/book/b123/wordz/%E6%88%91
                window.AllBooksForPress = data;
                let route = <Router history={hashHistory}>
                    {/*<IndexRoute component={BookList}/>*/}
                    <Route path="/" components={PressList}>
                        <Route path="/press/:presspinyin" component={BookList}>
                            <Route path="/press/:presspinyin/book/:bookId" components={SingleBook}>
                                <Route path="/press/:presspinyin/book/:bookId/word/:wordId" components={WordList}/>
                            </Route>
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






