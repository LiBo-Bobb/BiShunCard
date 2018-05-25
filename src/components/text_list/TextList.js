import React, {Component} from 'react';
import {IndexLink} from 'react-router';
import './TextList.css';
import fetch from 'isomorphic-fetch'
import BiShunCanvas from '../bishun/BiShunCanvas'

const courseData = window.course_data_libo;

export default class TextList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            textInfo: null,
            //笔画数量
            bihuaCount: "",
            //笔顺
            bishun: "",
            //拼音
            pinyin: [],
            //汉字结构
            structure: "",
            //当前的汉字
            currentText: "",
            //音频路径的前缀
            audioSrc: "",
            bishunColor: "#969696",
            //控制是否显示汉字笔画组件
            isShowBiShun: false,
            //控制笔画结构的颜色
            controlIndex: -1,
        }
    }

    //获取笔画动画的数据...
    getBiShunData = (text) => {
        // const url = 'http://p8ej3yb7v.bkt.clouddn.com//%25E5%25A4%25A7/canvasData.json';
        let url = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/canvasData.json`;
        let that = this;
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log("存在一个问题，状态码为：" + response.status);
                        return;
                    }
                    //检查响应文本
                    response.json().then(function (data) {
                        that.setState({textData: data, isShowBiShun: true})
                        // console.log("服务器响应的数据....", data)
                    });
                }
            )
            .catch(function (err) {
                console.log("Fetch错误:" + err);
            });
    }

    //获取汉字具体信息
    getTextDetailInfo = (text) => {
        let url = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/bishun.json`;
        let that = this;
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log("存在一个问题，状态码为：" + response.status);
                        return;
                    }
                    //检查响应文本
                    response.json().then(function (data) {
                        let {bihuaCount, bishun, bushou, pinyin, structure} = data;
                        let src = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/pinyin`
                        that.setState({
                            textInfo: data,
                            bihuaCount,
                            bishun,
                            bushou,
                            pinyin,
                            structure,
                            currentText: text,
                            audioSrc: src,
                        })
                        // console.log("服务器响应的汉字具体数据....", data)
                    });
                }
            )
            .catch(function (err) {
                console.log("Fetch错误:" + err);
            });

    }

    canvasSupportError = () => {
        console.log('canvas not support')
    }

    render() {
        let {lesson = []} = courseData;
        let lessonId = this.props.params.id
        let {textData, textInfo, bihuaCount, bishun, bushou, pinyin, structure, audioSrc, bishunColor, controlIndex} = this.state
        // console.log("每个汉字调取接口的响应的动画信息...", textData && textData)
        // console.log("汉字的具体信息...", textInfo && textInfo)
        // console.log("目录数据.....", lesson)


        let arrBiShun = bishun.split(",")
        // console.log("arrBiShun....", arrBiShun)


        let BiShun = <div style={{textAlign: "center", margin: "20px auto",paddingBottom:"20px"}}>
            {this.state.isShowBiShun ? <BiShunCanvas
                splitCallback={({loop,}) => {

                    console.log("每个笔画开始.....", loop)
                    if (loop) {
                        this.setState({controlIndex: controlIndex + 1})
                    } else {
                        this.setState({controlIndex: -1})
                    }
                }}
                fillColor={"#417BEE"}
                canvasData={textData}
                width={200}
                failCallback={this.canvasSupportError}
            /> : ""}
            <div style={{marginTop:"15px"}}>
                {arrBiShun.length > 0
                    ? arrBiShun.map((item, index) => {
                        let color = controlIndex === index ? "green" : "#B4B4B4";
                        return <span style={{color,marginRight:"5px"}} key={"bishun" + index}>{item}</span>
                    })
                    : ""}

            </div>
        </div>
        return (<div className="TextBoxArea">
            <IndexLink to="/">
                <div className="go_back">
                    返回目录id:{this.props.params.id}
                </div>
            </IndexLink>
            <div className="audioBigBox_gk">
                {pinyin.length ? pinyin.map((item, index) => {
                    // console.log("index666666", index)
                    return (
                        <div
                            key={"pin"+index}
                            className="audioBox_gk">
                            <div className="audioPinyin">
                                {item}
                            </div>
                            <div
                                onClick={() => {
                                    if (index === 0) {
                                        this.refs.audio0.play()
                                    } else if (index === 1) {
                                        this.refs.audio1.play()
                                    } else if (index === 2) {
                                        this.refs.audio2.play()
                                    } else if (index === 3) {
                                        this.refs.audio3.play()
                                    } else if (index === 4) {
                                        this.refs.audio4.play()
                                    } else if (index === 5) {
                                        this.refs.audio5.play()
                                    }
                                }}
                                className="textAudion">
                                <img
                                    style={{width: "100%"}}
                                    src="https://img.gankao.com/market/indexImg/1527126873904.PNG"
                                    alt="小喇叭"/>
                                <audio ref={`audio${index}`}
                                    // controls
                                       src={`${audioSrc}${index}.mp3`}>
                                    该浏览器暂不支持音频
                                </audio>
                            </div>
                        </div>
                    )
                }) : ""}
            </div>


            {BiShun}


            <div className="TextList">
                {lesson && lesson[lessonId].words.map((item, index) => {
                    return <div
                        onClick={() => {
                            this.setState({isShowBiShun: false,controlIndex:-1})
                            this.getBiShunData(item)
                            this.getTextDetailInfo(item)
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