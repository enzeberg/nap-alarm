import React, { Component } from 'react';

import Header from './components/Header';
import Alarm from './components/Alarm';
import Footer from './components/Footer';
import './styles/App.css';

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
