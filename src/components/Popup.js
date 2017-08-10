import React, { Component } from 'react';
import '../styles/popup.css';

class Popup extends Component {

  render() {
    return (
      <div className="popup"
           style={{display: this.props.display}}>
        <button className="stopRinging"
                onClick={this.props.onAwakeBtnClicked}>
          I'm awake!
        </button>
      </div>
    );
  }
}

export default Popup;