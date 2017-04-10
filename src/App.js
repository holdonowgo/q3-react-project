import React, { Component } from 'react';
import logo from './logo.svg';
import banner from './banner.jpg';
import banner2 from './woman-dumbell-exercise.svg';
import Routines from './components/Routines';
import Navbar from './components/NavBar';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-header">
          <img src={banner2} className="App-logo" alt="logo" />
          <h2>Welcome to Fit-Init</h2>
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Routines />
      </div>
    );
  };
}

export default App;
