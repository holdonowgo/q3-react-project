import React, { Component } from 'react';
import banner2 from './woman-dumbell-exercise.svg';
import Routines from './components/Routines';
import Dashboard from './components/Dashboard';
import Navbar from './components/NavBar'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const IndexPage = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={banner2} className="App-logo" alt="logo" />
        <h2>Welcome to Fit-Init</h2>
        <Navbar />
      </div>
      <Dashboard />
      <Routines />
    </div>
  )
}

const secondPage = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={banner2} className="App-logo" alt="logo" />
        <h2>More Stuff Is Here</h2>
        <Navbar />
      </div>
      <Dashboard />
    </div>
  )
}

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route path="/two" component={secondPage} />
      </div>
    </Router>
    );
  };
}

export default App;
