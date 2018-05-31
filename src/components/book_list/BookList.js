import React, {Component} from 'react';
import {Link} from 'react-router';
import './BookList.css'
import topBiShun from '../../images/topBiShun.png';
import bookImg from '../../images/bookImg.jpg'
import catlog from '../../images/catlog.png'


export default class TextList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bookData: []
        }
    }

    componentDidMount() {

        let bookData = window.bookData || [];
        this.setState({bookData})
    }


    render() {
        // console.log("bookData...",bookData)
        let {bookData} = this.state;

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
                            return <Link to={`/book-item/${index}`} key={"bookItem" + index}>
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