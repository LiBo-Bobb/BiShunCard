import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import './TextList.css';
import fetch from 'isomorphic-fetch'
import BiShunCanvas from '../bishun/BiShunCanvas'
import BishunPlayer from './BishunPlayer'
import PinyinSpeakerList from "./PinyinSpeaker";
import PinyinSpeaker from "./PinyinSpeaker";

const courseData = window.course_data_libo;

export default class TextList extends Component {
    constructor(props) {
        super(props)
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


    componentWillUnmount() {
        console.log('componentDidUnMount.....')
    }

    render() {
        let {lesson = []} = courseData;
        //当前汉字索引
        let lessonId = this.props.params.id;
        //当前汉字
        let {currentWord} = this.state;


        return (<div className="TextBoxArea">
            {!currentWord &&
            <IndexLink to="/">
                <div className="go_back">
                    返回目录id:{this.props.params.id}
                </div>
            </IndexLink>
            }
            {currentWord &&
            <BishunPlayer
                key={'bishunplayer_' + this.state.currentWord}
                onBishunPlayerClosed={this.handleOnBishunPlayerClosed}
                word={currentWord}
            />
            }
            <div className="TextList">
                {lesson && lesson[lessonId].words.map((item, index) => {
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
        </div>)
    }
}