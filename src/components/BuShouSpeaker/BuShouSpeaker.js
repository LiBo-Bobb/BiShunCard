import React, {Component} from 'react';

const BuShouAudio =
    {
        "点": "./audio/点.mp3",
        "横": "./audio/横.mp3",
        "横钩": "./audio/横钩.mp3",
        "横撇": "./audio/横撇.mp3",
        "横撇弯钩": "./audio/横撇弯钩.mp3",
        "横斜钩": "./audio/横斜钩.mp3",
        "横折": "./audio/横折.mp3",
        "横折钩": "./audio/横折钩.mp3",
        "横折提": "./audio/横折提.mp3",
        "横折弯": "./audio/横折弯.mp3",
        "横折弯钩": "./audio/横折弯钩.mp3",
        "横折折撇": "./audio/横折折撇.mp3",
        "横折折折钩": "./audio/横折折折钩.mp3",
        "捺": "./audio/捺.mp3",
        "撇": "./audio/撇.mp3",
        "撇点": "./audio/撇点.mp3",
        "撇折": "./audio/撇折.mp3",
        "竖": "./audio/竖.mp3",
        "竖钩": "./audio/竖钩.mp3",
        "竖提": "./audio/竖提.mp3",
        "竖弯": "./audio/竖弯.mp3",
        "竖弯钩": "./audio/竖弯钩.mp3",
        "竖折": "./audio/竖折.mp3",
        "竖折撇": "./audio/竖折撇.mp3",
        "竖折折钩": "./audio/竖折折钩.mp3",
        "提": "./audio/提.mp3",
        "弯钩": "./audio/弯钩.mp3",
        "弯折": "./audio/弯折.mp3",
        "斜钩": "./audio/斜钩.mp3",
        "折撇": "./audio/折撇.mp3",
        "折折钩": "./audio/折折钩.mp3"
    }

export default class PinyinSpeaker extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    };

    componentDidMount() {

    }

    //销毁组件
    componentWillUnmount() {
    }

    render() {
        let {BuShou, isCurrent} = this.props;

        return (<div>
            <div>
                {isCurrent &&
                <audio
                    autoPlay={isCurrent}
                    src={BuShouAudio[BuShou]}
                >
                    该浏览器暂不支持音频
                </audio>}

            </div>
        </div>);
    }
}

