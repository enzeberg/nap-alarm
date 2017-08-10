import React, { Component } from 'react';
import TimeInput from './TimeInput';
import Timer from './Timer';
import RingtonePlayer from './RingtonePlayer';
import Popup from './Popup';
import '../styles/alarm.css';

class Alarm extends Component {
  constructor() {
    super();
    this.state = {
      delay: undefined,
      alarmStatus: 'NO_DELAY' // 未设置闹钟
    };
  }

  updateDelay(delay) {
    this.setState({
      delay: delay,
      alarmStatus: 'DELAY_SETTED' // 进入倒计时
    });
  }

  timeForRinging() {
    this.setState({
      // delay: 0, // 此时Alarm的delay应仍不变，因为TimeInput中的selectedValue未变
      alarmStatus: 'RINGING' // 响铃
    });
  }

  handleClick() {
    const alarmStatus = this.state.alarmStatus;
    if (alarmStatus === 'DELAY_SETTED') {
      this.cancelAlarm();
    } else if (alarmStatus === 'CANCELED' || alarmStatus === 'RING_STOPPED') {
      this.restartAlarm();
    }
  }

  cancelAlarm() {
    this.setState({
      alarmStatus: 'CANCELED'
    });
  }

  restartAlarm() {
    this.setState({
      alarmStatus: 'DELAY_SETTED'
    });
  }

  stopRinging() {
    this.setState({
      alarmStatus: 'RING_STOPPED'
    });
  }

  render() {
    const alarmStatus = this.state.alarmStatus;
    let delayBtnDisplay = 'none',
        delayBtnContent,
        popupDisplay = 'none',
        shouldRing = false;

    // if (alarmStatus === 'NO_DELAY') {
    //   // delayBtnDisplay = 'none';
    //   // popupDisplay = 'none';
    // } else
    if (alarmStatus === 'DELAY_SETTED') {
      delayBtnDisplay = 'inline';
      delayBtnContent = 'Cancel';
    } else if (alarmStatus === 'CANCELED' ||  alarmStatus === 'RING_STOPPED') {
      delayBtnDisplay = 'inline';
      delayBtnContent = 'Restart';
    } else if (alarmStatus === 'RINGING') {
      delayBtnDisplay = 'inline';
      delayBtnContent = 'Restart';
      popupDisplay = 'block';
      shouldRing = true;
    }

    return (
      <div className="alarm">
        <h2>
          Wake me up in&nbsp;
          <TimeInput onDelayChanged={(delay) => this.updateDelay(delay)} />
          &nbsp;minutes.
        </h2>

        <Timer remainingTime={this.state.delay}
               onTimeout={() => this.timeForRinging()}
               alarmStatus={this.state.alarmStatus}
        />

        <RingtonePlayer shouldPlay={shouldRing} />
        <button className="delay-btn"
                style={{display: delayBtnDisplay}}
                onClick={() => this.handleClick()}>
                {delayBtnContent}
        </button>
        <Popup display={popupDisplay} onAwakeBtnClicked={() => this.stopRinging()} />
      </div>
      
    );
  }
}

export default Alarm;