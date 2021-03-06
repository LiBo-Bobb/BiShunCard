import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import {groupBy, chunk} from 'lodash'
import 'weui';
import 'react-weui/build/packages/react-weui.css';
import blue from './img/blue.png'
import topTingxie from './img/topTingxie.png'
import request from 'superagent'
import {
    LoadMore,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    Tab,
    TabBody,
    NavBar,
    NavBarItem,
    Dialog
} from 'react-weui';
import './App.css';


const api = window.apiSite;
const detailDomain = 'http://www.gankao.com/diandu/app.html?book=';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
            diandu: null,
            filter: [
                {
                    "id": 1,
                    "name": "一年级",
                    "active": true
                },
                {
                    "id": 2,
                    "name": "二年级",
                    "active": false
                },
                {
                    "id": 3,
                    "name": "三年级",
                    "active": false
                },
                {
                    "id": 4,
                    "name": "四年级",
                    "active": false
                },
                {
                    "id": 5,
                    "name": "五年级",
                    "active": false
                },
                {
                    "id": 6,
                    "name": "六年级",
                    "url": "http://test.gankao.com/v/tingxie/6",
                    "active": false
                }
            ],
            //初始化年级
            currentGradeName: "一年级",
            //当前年级数据
            currentGradeData: [],
            //最近阅读的书
            recentReadBooks: [],
            showIOS1: false,
            //通讯异常的dialog的样式
            style1: {
                buttons: [{
                    label: 'Ok',
                    onClick: this.hideDialog.bind(this)
                }]
            },
        }
    };

    componentDidMount() {
        this.geeData_diandu()
        this.handleRecentBooks()
    }


    //获取数据
    geeData_diandu = () => {
        request.get(api).query().then(
            res => {
                let datas = res.body;
                // console.log("------------")
                // console.log(datas)
                datas = groupBy(datas, 'grade')
                // console.log("按年级分组....")
                // console.log(datas)
                let keys = Object.keys(datas)
                //取到对象的key
                // console.log('keys......')
                // console.log(keys)
                for (let key of keys) {
                    // console.log("遍历数组元素key.......")
                    // console.log(key)
                    // console.log("每个年级的数据按照版本分组......")
                    // console.log(groupBy(datas[key], 'version'))
                    datas[key] = groupBy(datas[key], 'version')
                }
                // console.log("datas最终处理版本.....")
                // console.log(datas)
                this.setState({
                    diandu: datas,
                    currentGradeData: this.transform(datas["一年级"])
                })
                this.transform(datas["一年级"])
                // console.log(this.transform(datas["一年级"]))
            }
        ).catch(err => {
            console.log(`错误${err}`);
            this.setState({
                showIOS1: true
            })
        })
    }

    //隐藏dialog
    hideDialog() {
        this.setState({
            showIOS1: false,
        });
    }


    // 对象转化为数组
    transform = (obj) => {
        let arr = [];
        for (let item in obj) {
            arr.push({
                version: item,
                books: obj[item]
            });
        }
        return arr;
    }

    //最近阅读过得书
    handleRecentBooks = () => {
        if (!localStorage.getItem("recentBooks")) {
            localStorage.setItem("recentBooks", "[]");
        }
        let arr = JSON.parse(localStorage.getItem("recentBooks"));
        // console.log("arr,,,..")
        // console.log(arr)
        this.setState({
            recentReadBooks: arr
        })
    }
    //获取详细信息
    gotoDetail = (book) => {
        window.location.href = detailDomain + book;
    }

    render() {
        //测试
        // let {data: {banner}} = this.props;
        let {filter, diandu, currentGradeData, recentReadBooks} = this.state;
        return (<div className="App">
            <div className="imgPanel" onClick={this.handleData}>
                <img src={topTingxie} alt="gankao"/>
            </div>
            <Dialog type="ios"
                    title={this.state.style1.title}
                    buttons={this.state.style1.buttons}
                    show={this.state.showIOS1}>
                通讯异常， 请稍后再试！
            </Dialog>
            <Tab>
                <NavBar>
                    {filter.map((v, index) =>
                        <NavBarItem key={"aItem" + index}>
                            <a href="javascript:;"
                               onClick={
                                   () => {
                                       this.setState({
                                           currentGradeData: this.transform(diandu[v.name]),
                                           currentGradeName: v.name
                                       })
                                   }
                               }
                               className={v.name === this.state.currentGradeName ? 'filterNav active' : 'filterNav'}>
                                {v.name}
                            </a>
                        </NavBarItem>
                    )}
                </NavBar>
                {recentReadBooks.length > 0 && < div className="recentClick">
                    <div className="bar">
                        < img src={blue} alt="蓝条" style={{width: "3px", height: "16px"}}/>
                    </div>
                    <div className="textDet"> 最近点读</div>
                </div>}
                <div className="recentSubject">
                    {recentReadBooks.map((booksItem, index) => {
                        return <div className="subject"
                                    key={"booksItem" + index}
                                    onClick={() => {
                                        this.gotoDetail(booksItem.path)
                                    }}>
                            <img src={"http://diandu.media.gankao.com/" + booksItem.path + "/cover.jpg"}
                                 style={{width: "92px", height: "140px", display: 'block', margin: 'auto'}}
                                 alt="科目一"/>
                            <div style={
                                {
                                    fontSize: "12px",
                                    color: "#999999",
                                    width: "90px",
                                    height: "36px",
                                    overflow: "hidden",
                                    margin: "10px auto 0"
                                }
                            }>
                                {booksItem.name}
                                ({typeof booksItem.version === "undefined" ? "通用版" : booksItem.version})
                            </div>
                        </div>
                    })}
                </div>
                <TabBody>
                    <Panel> {
                        currentGradeData.length === 0 ?
                            <LoadMore loading> 加载中......</LoadMore>
                            : currentGradeData.map((item, index) => {
                                return <div key={
                                    "PanelHeader" + index
                                }>
                                    <PanelHeader className="banben"> {
                                        item.version === 'undefined' ? "通用版" : item.version}
                                    </PanelHeader>
                                    {item.books.map((booksItem, index) => {
                                        let img = "http://diandu.media.gankao.com/" + booksItem.path + "/cover.jpg";
                                        return <PanelBody key={
                                            "PanelBody" + index
                                        }>
                                            <MediaBox key={"src" + index}
                                                      type="appmsg"
                                                      onClick={
                                                          () => {
                                                              if (!localStorage.getItem("recentBooks")) {
                                                                  localStorage.setItem("recentBooks", "[]");
                                                              }
                                                              let arr = JSON.parse(localStorage.getItem("recentBooks"));
                                                              if (arr.length < 3) {
                                                                  arr.push(booksItem);
                                                              } else {
                                                                  arr.shift();
                                                                  arr.push(booksItem);
                                                              }
                                                              localStorage.setItem("recentBooks", JSON.stringify(arr));
                                                              this.setState({
                                                                  recentReadBooks: arr
                                                              })
                                                              this.gotoDetail(booksItem.path);
                                                          }
                                                      }>
                                                <MediaBoxHeader>
                                                    <div style={{width: '90px'}}>
                                                        <img src={img} alt="课本" style={{width: '100%'}}/>
                                                    </div>
                                                </MediaBoxHeader>
                                                <MediaBoxBody>
                                                    <MediaBoxTitle>
                                                        {booksItem.name}
                                                        ({typeof booksItem.version === "undefined" ? "通用版" : booksItem.version})
                                                    </MediaBoxTitle>
                                                    <MediaBoxDescription>
                                                        {booksItem.grade}
                                                    </MediaBoxDescription>
                                                </MediaBoxBody>
                                                <MediaBoxHeader style={{color: "#ECECEC", fontSize: "22px"}}>
                                                </MediaBoxHeader>
                                            </MediaBox>
                                            <div style={{borderTop: "1px solid #ECECEC"}}>
                                            </div>
                                        </PanelBody>
                                    })}
                                </div>
                            })}
                    </Panel>
                </TabBody>
            </Tab>
        </div>);
    }
}

