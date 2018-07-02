'use strict';

require('babel-polyfill');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('react-router');

var _SingleBook = require('./components/single_book/SingleBook');

var _SingleBook2 = _interopRequireDefault(_SingleBook);

var _TextList = require('./components/text_list/TextList');

var _TextList2 = _interopRequireDefault(_TextList);

var _BookList = require('./components/book_list/BookList');

var _BookList2 = _interopRequireDefault(_BookList);

require('./index.css');

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

(0, _isomorphicFetch2.default)("./book_data.json", {
    method: 'GET'
}).then(function (response) {
    if (response.status !== 200) {
        console.log("存在一个问题，状态码为：" + response.status);
        return;
    }
    response.json().then(function (data) {
        console.log("data......", data);
        window.bookData = data;
    });
}).catch(function (err) {
    console.log("Fetch错误:" + err);
});
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map