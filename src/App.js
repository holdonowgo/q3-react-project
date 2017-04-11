import React, { Component } from 'react';
import banner2 from './woman-dumbell-exercise.svg';
import Routines from './components/Routines';
import Exercises from './components/Exercises';
import Dashboard from './components/Dashboard';
import Media from './components/Media';
import Navbar from './components/NavBar'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={banner2} className="App-logo" alt="logo" />
          <h2>Welcome to Fit-Init</h2>
        </div>
        <Router>
          <div>
            <Route exact path="/" component={IndexPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/exercises" component={Exercises} />
            <Route path="/routines" component={Routines} />
          </div>
        </Router>
      </div>
    );
  };
}

const IndexPage = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}


export default App;
