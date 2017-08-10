import React, { Component } from 'react';

class RingtonePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '../ringtone/Tassel-Cymophane.mp3', // the path related to "public/index.html"
      shouldPlay: props.shouldPlay
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({shouldPlay: nextProps.shouldPlay});
  }

  render() {
    const html = this.state.shouldPlay ?
                 (<audio src={this.state.src} autoPlay loop ></audio>)
                 : ('');
    return (
      <div>
        {html}
      </div>
    );
  }
}

export default RingtonePlayer;