import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header';
import Alarm from './Alarm';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Alarm />
        <Footer />
      </div>
    );
  }
}

export default App;
