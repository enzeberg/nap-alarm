import React, { Component } from 'react';

class RingtonePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: './ringtone/Tassel-Cymophane.mp3', // the path related to "public/index.html"
      shouldPlay: props.shouldPlay
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({shouldPlay: nextProps.shouldPlay}, () => {
      let audio = document.querySelector('audio');
      if (this.state.shouldPlay) {
        if (audio.currentTime !== 0) {
          audio.currentTime = 0;
        }
        audio.play();
      } else {
        audio.pause();
      }
    });
  }

  render() {
    return (
      <div className="ringtong-player">
        <audio src={this.state.src} loop preload></audio>
      </div>
    );
  }
}

export default RingtonePlayer;