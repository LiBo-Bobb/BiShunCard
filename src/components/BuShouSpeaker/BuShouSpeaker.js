import React, {Component} from 'react';
const BuShouAudio =
    {
        "点": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横撇": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横撇弯钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横斜钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折提": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折弯": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折弯钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折折撇": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "横折折折钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "捺": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "撇": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin1.mp3",
        "撇点": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "撇折": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖提": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖弯": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖弯钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖折": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖折撇": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "竖折折钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "提": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "弯钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "弯折": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "斜钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "折撇": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3",
        "折折钩": "http://p8ej3yb7v.bkt.clouddn.com//%25E4%25B8%2581/pinyin0.mp3"
    }

export default class PinyinSpeaker extends Component {

    constructor(props) {
        super(props);

        this.state = {}
        this.isPlayed = false;
    };

    componentDidMount() {

    }

    //销毁组件
    componentWillUnmount() {
        // console.log('componentDidUnMount.....')
    }

    render() {
        let {BuShou, isCurrent} = this.props;

        // console.log("isCurrent.......",isCurrent)

        // autoPlay={isCurrent}

        return (<div>
            <div>
                {isCurrent && <audio src={BuShouAudio[BuShou]}
                                     onEnded={() => {
                                         console.log("edg,,,,,, ")

                                         this.isPlayed = true;
                                     }}>
                    该浏览器暂不支持音频
                </audio>}

            </div>
        </div>);
    }
}

