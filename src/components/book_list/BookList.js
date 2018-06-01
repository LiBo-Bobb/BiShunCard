import React, {Component} from 'react';
import {Link} from 'react-router';
import {filter} from 'lodash';
import './BookList.css'
import topBiShun from '../../images/topBiShun.png';
import bookImg from '../../images/bookImg.jpg'


export default class WordList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: [],
            pressname: ''
        }
    }

    componentDidMount() {
        let pressData = filter(window.AllBooksForPress || [], m => m.presspinyin === this.props.params.presspinyin);
        if (pressData.length === 0) {
            //TODO: show error on page...
        }

        // console.log("pressData.....", pressData)
        let {pressname, books} = pressData[0];
        this.setState({bookData: books, pressname})
    }

    render() {
        let {bookData} = this.state;
        let {presspinyin} = this.props.params;

        return (
            <div className="bookListBox">
                {this.props.children && this.props.children}
                {!this.props.children &&
                <div>
                    <div className="topBannerBox">
                        <img src={topBiShun} style={{width: "100%"}} alt=""/>
                    </div>

                    <div className="bookListGk">
                        {bookData.map((item, index) => {
                            return <Link to={`/press/${presspinyin}/book/${index}`} key={"bookItem" + index}>
                                <div className="bookItem">
                                    <div className="bookImg" style={{width: '90px', marginRight: "15px"}}>
                                        <img style={{width: "100%", height: "100%"}} src={bookImg} alt="图书封面"/>
                                    </div>
                                    <div className="bookInfo">
                                        <div className="version" style={{fontSize: "14px", color: "black"}}>
                                            语文(人教版)
                                        </div>
                                        <div className="grade" style={{color: "#999999", fontSize: "13px"}}>
                                            {item.name}
                                        </div>

                                    </div>
                                    <div className="clickIcon">
                                        >>
                                    </div>
                                </div>
                            </Link>
                        })}

                    </div>
                </div>
                }


            </div>
        )
    }
}