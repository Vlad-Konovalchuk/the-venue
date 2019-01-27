import React from 'react';
import {Flip} from "react-reveal";

export class CountDown extends React.Component {
    state = {
        deadLine: 'Dec, 16, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    };

    getTimeUntil(date) {
        const time = Date.parse(date) - Date.parse(new Date());
        if (time < 0) {
            this.setState({deadLine: 'Dec, 16, 2020'})
        } else {
            const seconds = Math.floor((time / 1000) % 60);
            const minutes = Math.floor((time / 1000 / 60) % 60);
            const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
            const days = Math.floor((time / (1000 * 60 * 60 * 24)));

            this.setState({days, hours, minutes, seconds})
        }
    }

    componentDidMount() {
        setInterval(() => this.getTimeUntil(this.state.deadLine), 1000)
    }

    render() {
        const {days, hours, minutes, seconds} = this.state;
        return (
            <Flip left delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts in
                    </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">{days}</div>
                            <div className="countdown_tag">Days</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{hours}</div>
                            <div className="countdown_tag">Hs</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{minutes}</div>
                            <div className="countdown_tag">Min</div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">{seconds}</div>
                            <div className="countdown_tag">Sec</div>
                        </div>
                    </div>
                </div>
            </Flip>
        )
    }
};