import React, {Component} from 'react';
import {IndexLink,Link} from 'react-router';
import './TextList.css';
import BishunPlayer from '../BishunPlayer/BishunPlayer'
import catlog from '../../images/catlog.png'


export default class TextList extends Component {
    constructor(props) {
        super(props)
        //获取书的索引
        let {bookId} = props.params;
        //获取某一本书的数据
        this.courseData = window.bookData[bookId].book_data;
        // console.log(this.courseData)
        this.state = {
            //显示de汉字
            currentWord: ''
        }
    }


    handleOnBishunPlayerClosed = () => {
        this.setState({currentWord: ''})
    }


    canvasSupportError = () => {
        console.log('canvas not support')
    }

    //卸载书本组件
    componentWillUnmount() {
        // console.log('卸载书本组卷........')
    }

    render() {
        let {lesson = []} = this.courseData;
        let {currentWord} = this.state;
        //分别为书本的索引和课时的索引
        let {bookId,textId} = this.props.params;


        return (
            <div className="TextBoxArea">
                {!currentWord &&
                <Link to={`/book-item/${bookId}`}>
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
                <div className="TextList" style={{top: currentWord ? "355px" : "45px"}}>
                    {lesson && lesson[textId].words.map((item, index) => {
                        return <div
                            onClick={() => {
                                // console.log("this.state...", this.state)
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