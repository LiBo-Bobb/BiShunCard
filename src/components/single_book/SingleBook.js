import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';
import catlog from '../../images/catlog.png'
import './SingleBook.css';
//计算汉字的总数
// const wordCounts = lesson.reduce((pre, next) => pre + next['words'].length, 0) || 0;
export default class SingleBook extends Component {
    constructor(props) {
        super(props);
        //出版社名称和课本索引
        let {presspinyin, bookId} = this.props.params;
        //获取当前书本的信息
        this.courseData = window.AllBooksForPress.filter(m => m.presspinyin === presspinyin)[0]["books"][bookId];
        this.state = {}
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

        // console.log(" this.courseData..", this.courseData)
        let {book_data: {courseName, courseDesc, courseBanner, lessonIcon, textBackImg, lesson,}} = this.courseData;
        let {presspinyin, bookId} = this.props.params

        // console.log("this.courseData....", this.courseData)
        let wordCounts = lesson.reduce((pre, next) => {
            return pre + next["words"].length;

        }, 0)
        return (<div className="App">
            {this.props.children && this.props.children}
            {!this.props.children && <div>
                {/*头部banner信息start*/}
                <Link to={`/press/${presspinyin}`}>
                    <div className="goBookList">
                        <span style={{marginRight: "5px"}}>
                            <img src={catlog} alt=""/>
                        </span>
                        返回
                    </div>
                </Link>
                <div className="courseTitleArea">
                    <div className="leftCourseImg">
                        <img style={{height: "150px"}} src={courseBanner} alt=""/>
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
                            {courseDesc}
                        </div>
                    </div>
                </div>
                {/*头部banner信息end*/}
                <div className="catalogList">
                    {/*目录列表start*/}
                    {lesson.map((item, index) => {
                        return <Link to={`press/${presspinyin}/book/${bookId}/word/${index}`} key={"course" + index}>
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

