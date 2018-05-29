import React, {Component} from 'react';
import {Link} from 'react-router';
import './App.css';

const courseData = window.course_data_libo;
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {

    }


    render() {
        let {courseName, courseDesc, courseBanner, lessonIcon, textBackImg, lesson} = courseData;
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
                        <div style={{color: "#B4B4B4", fontSize: "14px", marginTop: "10px",}}>3337个字</div>
                        <div
                            style={{
                                color: "#B4B4B4",
                                fontSize: "12px",
                                marginTop: "20px"
                            }}>大发的爱妃都是发奥数地方奥数地方奥数地方啊水电费奥数地方...
                        </div>
                    </div>
                </div>
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
                                        5个字
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

