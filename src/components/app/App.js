import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';

const courseData = window.course_data_libo;

const {lesson} = courseData;
//计算汉字的总数
const wordCounts = lesson.reduce((pre, next) => pre + next['words'].length, 0) || 0;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //汉字总数
            wordSum: 0,
        }
    };

    componentDidMount() {

    }

    /**
     * 根据订单id获取订单详细数据
     * @param  {[number]} id [订单ID]
     * @return {[order]}    [订单详细信息]
     */

    getWordsCounts = () => {


    }

    render() {
        let {courseName, courseDesc, courseBanner, lessonIcon, textBackImg, lesson, } = courseData;
        return (<div className="App">
            {this.props.children && this.props.children}
            {!this.props.children && <div>
                {/*头部banner信息start*/}
                <div className="courseTitleArea">
                    <div className="leftCourseImg">
                        <img style={{width: "100%"}} src={courseBanner} alt=""/>
                    </div>
                    <div className="rightTextDesc">
                        <h1 style={{fontSize: "17px", color: "#000000"}}>{courseName}</h1>
                        <div style={{color: "#B4B4B4", fontSize: "14px", marginTop: "10px",}}>{wordCounts}个字</div>
                        <div
                            style={{
                                color: "#B4B4B4",
                                fontSize: "12px",
                                marginTop: "20px"
                            }}>
                            汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字汉字
                        </div>
                    </div>
                </div>
                {/*http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3*/}
              {/*  <audio controls src="../../audio/弯折.mp3">
                    您的浏览器不支持 audio 标签。
                </audio>*/}
                {/*头部banner信息end*/}
                <div className="catalogList">
                    {/*目录列表start*/}
                    {lesson.map((item, index) => {
                        return <Link to={`/text-list/${index}`} key={"course" + index}>
                            <div className="catalogItem">
                                <div className="imgIcon"
                                     style={{marginRight: "20px", width: "35px", lineHeight: "100%"}}>
                                    <img style={{width: "100%"}} src={lessonIcon} alt=""/>
                                </div>
                                <div className="textBox">
                                    <div style={{color: "#000000", fontSize: "14px"}}>{item.name}</div>
                                    <div style={{color: "#969696", fontSize: "12px"}}>
                                        {item.words.length}个字
                                    </div>
                                </div>
                            </div>
                        </Link>
                    })}
                </div>
                {/*目录列表end*/}


            </div>}


        </div>);
    }
}

