import React, {Component} from 'react';
import {IndexLink, Link} from 'react-router';
import './WordList.css';
import BishunPlayer from '../BishunPlayer/BishunPlayer'
import catlog from '../../images/catlog.png'


export default class WordList extends Component {
    constructor(props) {
        super(props)
        //获取书的索引
        let {presspinyin, bookId, wordId} = props.params;
        //获取当前书的数据
        this.currentBookData = window.AllBooksForPress.filter(m => m.presspinyin === presspinyin)[0]["books"][bookId];
        // console.log(this.courseData)
        this.state = {
            //显示de汉字
            currentWord: ''
        }
    }


    handleOnBishunPlayerClosed = () => {
        this.setState({currentWord: 's'})
    }


    canvasSupportError = () => {
        console.log('canvas not support')
    }

    //卸载书本组件
    componentWillUnmount() {
        // console.log('卸载书本组卷........')
    }


    //点击某个汉字 ，将亲北京色变为灰色
    handleClickWord = (word) => {

    }

    render() {
        let {book_data: {lesson}} = this.currentBookData;
        let {currentWord} = this.state;
        //分别为书本的索引和课时的索引
        let {presspinyin, bookId, wordId} = this.props.params;


        return (
            <div className="TextBoxArea">
                {!currentWord &&
                <Link to={`/press/${presspinyin}/book/${bookId}`}>
                    <div className="go_back">
                        <span
                            style={{width: "100%", marginRight: "10px", lineHeight: "100%"}}>
                        <img src={catlog} alt=""/>
                        </span>
                        返回目录
                    </div>
                </Link>
                }
                {currentWord &&
                <BishunPlayer
                    key={'bishunplayer_' + this.state.currentWord}
                    onBishunPlayerClosed={this.handleOnBishunPlayerClosed}
                    word={currentWord}
                />
                }
                <div className="WordList" style={{top: currentWord ? "360px" : "45px"}}>
                    {lesson && lesson[wordId].words.map((item, index) => {
                        return <div
                            onClick={() => {
                                this.handleClickWord(item)
                                this.setState({currentWord: item})
                            }}
                            className="textItemBox"
                            key={"lesson" + index}>
                            <div className="textItem">
                                {item}
                            </div>
                        </div>
                    })}
                </div>
            </div>
        )
    }
}