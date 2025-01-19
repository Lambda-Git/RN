import React from 'react';
import Style from './index.module.scss';

class CountDown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDomComplete: true, // Dom 是否加载完成
            isAppLogined: false, // 是否登录
            token: '',
            dfp: '',
            pageTotal: 1,
            currencyList: [],
            isDataLoading: true,
            nextStartDate: '',
            nextSD: {
                day: '00',
                hh: '00',
                mm: '00',
                ss: '00'
            },
            mode: this.props.mode,
        };

    };
    setTimer(_ts) {

        let ts_diff = _ts;

        if (ts_diff <= 0) {
            return
        }

        // 弥补倒计时延迟一秒的展示
        if (ts_diff - 1000 > 0) {
            ts_diff = ts_diff - 1000;
            let dd = parseInt((ts_diff / 1000 / 60 / 60 / 24), 10);
            let hh = parseInt((ts_diff / 1000 / 60 / 60) % 24, 10);
            let mm = parseInt((ts_diff / 1000 / 60) % 60, 10);
            let ss = parseInt((ts_diff / 1000) % 60, 10);
            let day = dd;

            if (dd >= 10) {
                dd = `${dd} Days `;
            } else if (dd >= 0 && dd < 10) {
                day = `0${dd}`
                dd = `0${dd} Days `;

            }

            if (this.props.showDay != true) {
                hh = day * 24 + hh
            }

            hh = hh < 10 ? `0${hh}` : hh;
            mm = mm < 10 ? `0${mm}` : mm;
            ss = ss < 10 ? `0${ss}` : ss;

            this.setState({
                nextStartDate: `${dd}${hh}:${mm}:${ss}`,
                nextSD: {
                    day,
                    hh,
                    mm,
                    ss
                }
            });
        } else {
            this.setState({
                nextSD: {
                    day: '00',
                    hh: '00',
                    mm: '00',
                    ss: '00'
                }
            });
        };

        this._realTime && clearInterval(this._realTime);
        this._realTime = setInterval(() => {

            // 倒计时启动
            if (ts_diff - 1000 > 0) {
                ts_diff = ts_diff - 1000;
                let dd = parseInt((ts_diff / 1000 / 60 / 60 / 24), 10);
                let hh = parseInt((ts_diff / 1000 / 60 / 60) % 24, 10);
                let mm = parseInt((ts_diff / 1000 / 60) % 60, 10);
                let ss = parseInt((ts_diff / 1000) % 60, 10);
                let day = dd;

                if (dd >= 10) {
                    dd = `${dd} Days `;
                } else if (dd >= 0 && dd < 10) {
                    day = `0${dd}`
                    dd = `0${dd} Days `;

                }

                if (this.props.showDay != true) {
                    hh = day * 24 + hh
                }


                hh = hh < 10 ? `0${hh}` : hh;
                mm = mm < 10 ? `0${mm}` : mm;
                ss = ss < 10 ? `0${ss}` : ss;

                this.setState({
                    nextStartDate: `${dd}${hh}:${mm}:${ss}`,
                    nextSD: {
                        day,
                        hh,
                        mm,
                        ss
                    }
                });
            } else {
                // 倒计时结束
                this.setState({
                    nextSD: {
                        day: '00',
                        hh: '00',
                        mm: '00',
                        ss: '00'
                    }
                });

                clearInterval(this._realTime);
                this.props.timeOverCb();
            };
        }, 1000);
    };

    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setTimer(this.props.value);
        }
    }

    componentDidMount() {
        this.setTimer(this.props.value)
    };

    render() {
        const { className } = this.props;
        const { nextSD, mode } = this.state;
        return (
            <div className={className}>
                <div className={Style.countdown}>
                    <div className={Style.time}>
                        <div className={Style.count}>{nextSD?.day || '00'}</div>
                        <div className={Style.count_type}>D</div>
                    </div>
                    <div className={Style.symbols}>:</div>
                    <div className={Style.time}>
                        <div className={Style.count}>{nextSD?.hh || '00'}</div>
                        <div className={Style.count_type}>H</div>
                    </div>
                    <div className={Style.symbols}>:</div>
                    <div className={Style.time}>
                        <div className={Style.count}>{nextSD?.mm || '00'}</div>
                        <div className={Style.count_type}>M</div>
                    </div>
                    <div className={Style.symbols}>:</div>
                    <div className={Style.time}>
                        <div className={Style.count}>{nextSD?.ss || '00'}</div>
                        <div className={Style.count_type}>S</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CountDown;