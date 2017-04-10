import logo from '../logo.svg';
import banner from '../banner.jpg';
import banner2 from '../woman-dumbell-exercise.svg';
import Routines from './Routines';
import Dashboard from './Dashboard';
import '../App.css';
import Navbar from './NavBar'
import React, { PropTypes, Component } from 'react';

class Hello extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={banner2} className="App-logo" alt="logo" />
          <h2>Welcome to Fit-Init</h2>
          <Navbar />
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Dashboard />
        <Routines />
      </div>
    );
  };
}

export default (Hello);
