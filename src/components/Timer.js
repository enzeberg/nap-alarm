import React, { Component } from 'react';
import '../styles/timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remainingTime: props.remainingTime,
      display: false
    };
    
  }

  countdown() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    let remainingTime = this.state.remainingTime;
    // let interval;
    this.interval = setInterval(() => {
      if (remainingTime === 0) {
        clearInterval(this.interval);
        this.props.onTimeout(); // 会造成Timer接收props
      } else {
        remainingTime -= 1;
        this.setState({remainingTime: remainingTime});
      }
      
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    
    if (nextProps.alarmStatus === 'CANCELED') {
      if (this.interval) {
        clearInterval(this.interval);
        this.setState({
          remainingTime: undefined,
          display: false
        });
      }
    }

    if (nextProps.alarmStatus === 'DELAY_SETTED') {
      this.setState({
        remainingTime: nextProps.remainingTime,
        display: true
      }, () => {
        this.countdown();
      });
    }
    
  }

  render() {
    const hours = Math.floor(this.state.remainingTime / 3600);
    const minutes = Math.floor((this.state.remainingTime - hours * 3600) / 60);
    const seconds = this.state.remainingTime - hours * 3600 - minutes * 60;
    const timerOpacity = this.state.display ? 1 : 0;
    return (
      <div className="timer" style={{opacity: timerOpacity}}>
        <p className="inner">
          {'0' + hours}
          :
          {minutes < 10 ? '0' + minutes : minutes}
          :
          {seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
    );
  }
}

export default Timer;