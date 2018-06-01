import React, {Component} from 'react';
import {Link} from 'react-router';


export default class WordList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }


    render() {


        // console.log("this.props.children........", this.props.children)
        return (
            <div className="bookListBox">

                {this.props.children && this.props.children}
                {!this.props.children &&
                <div>
                    <Link to="/press/sanjia">
                        出版社列表
                    </Link>

                </div>
                }


            </div>
        )
    }
}