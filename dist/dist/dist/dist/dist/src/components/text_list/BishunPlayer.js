// import React, {Component} from 'react';
// import {Link} from 'react-router';
// import fetch from "isomorphic-fetch";
//
// export default class BishunPlayer extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             textInfo: null,
//             //笔画数量
//             bihuaCount: "",
//             //笔顺
//             bishun: "",
//             //拼音
//             pinyin: [],
//             //汉字结构
//             structure: "",
//             //当前的汉字
//             currentText: "",
//             //音频路径的前缀
//             audioSrc: "",
//             bishunColor: "#969696",
//             //控制笔画结构的颜色
//             controlIndex: -1,
//         }
//     };
//
//     componentDidMount() {
//         this.getBiShunData(this.props.word)
//         this.getTextDetailInfo(this.props.word)
//     }
//     componentDidUnMount() {
//         console.log('componentDidUnMount.....')
//     }
//
//
//     //获取笔画动画的数据...
//     getBiShunData = (text) => {
//         let url = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/canvasData.json`;
//         let that = this;
//         fetch(url)
//             .then(
//                 function (response) {
//                     if (response.status !== 200) {
//                         console.log("存在一个问题，状态码为：" + response.status);
//                         return;
//                     }
//                     // console.log("response.....",response)
//                     //检查响应文本
//                     response.json().then(function (data) {
//                         that.setState({textData: data})
//                         // console.log("服务器响应的数据....", data)
//                     });
//                 }
//             )
//             .catch(function (err) {
//                 console.log("Fetch错误:" + err);
//             });
//     }
//
//     //获取汉字具体信息
//     getTextDetailInfo = (text) => {
//         let url = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/bishun.json`;
//         let that = this;
//         fetch(url)
//             .then(
//                 function (response) {
//                     if (response.status !== 200) {
//                         console.log("存在一个问题，状态码为：" + response.status);
//                         return;
//                     }
//                     //检查响应文本
//                     response.json().then(function (data) {
//                         let {bihuaCount, bishun, bushou, pinyin, structure} = data;
//                         let src = `http://p8ej3yb7v.bkt.clouddn.com//${encodeURI(encodeURI(text))}/pinyin`
//                         that.setState({
//                             textInfo: data,
//                             bihuaCount,
//                             bishun,
//                             bushou,
//                             pinyin,
//                             structure,
//                             currentText: text,
//                             audioSrc: src,
//                             controlIndex: -1,
//                         })
//                         // console.log("服务器响应的汉字具体数据....", data)
//                     });
//                 }
//             )
//             .catch(function (err) {
//                 console.log("Fetch错误:" + err);
//             });
//
//     }
//
//
//     render() {
//         return (<div className="topArea">
//             {/*音频播放*/}
//             <div className="audioBigBox_gk">
//                 {pinyin.length && pinyin.map((item,index) => <PinyinSpeaker pinyin={item}/> )}
//
//                 <div className="delete_comp" onClick={this.delComp}>
//                     <img style={{width: "100%"}} src="https://img.gankao.com/market/indexImg/1527506508187.PNG" alt=""/>
//                 </div>
//             </div>
//             {/*笔顺动画组件start*/}
//             <div style={{textAlign: "center", margin: "20px auto", paddingBottom: "20px"}}>
//                 <BiShunCanvas
//                     splitCallback={({loop}) => {
//                         // console.log("每个笔画开始.....", loop)
//                         if (loop) {
//                             this.setState({controlIndex: controlIndex + 1})
//                         } else {
//                             this.setState({controlIndex: -1, loop: false})
//                         }
//                     }}
//                     fillColor={"#417BEE"}
//                     canvasData={textData}
//                     width={200}
//                     failCallback={this.canvasSupportError}
//                 />
//                 <div style={{marginTop: "15px"}}>
//                     {(arrBiShun.length > 0)
//                         ? arrBiShun.map((item, index) => {
//                             // console.log("笔顺...", index, controlIndex)
//                             let color = controlIndex === index ? "green" : "#B4B4B4";
//                             return <span style={{color, marginRight: "5px"}} key={"bishun" + index}>{item}</span>
//                         })
//                         : ""}
//                 </div>
//             </div>
//             {/*笔顺动画组件end*/}
//         </div>);
//     }
// }
//
"use strict";
//# sourceMappingURL=BishunPlayer.js.map
//# sourceMappingURL=BishunPlayer.js.map
//# sourceMappingURL=BishunPlayer.js.map
//# sourceMappingURL=BishunPlayer.js.map
//# sourceMappingURL=BishunPlayer.js.map