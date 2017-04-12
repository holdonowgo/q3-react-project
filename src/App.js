import React, { Component } from 'react';
import banner2 from './woman-dumbell-exercise.svg';
import atomic from '../public/images/Health_Fitness_Icons/PNGs - Multicolor/atomic@2x.png';
import Routines from './components/Routines/Routines';
import Exercises from './components/Exercises/Exercises';
import Dashboard from './components/Dashboard/Dashboard';
import Media from './components/Media/Media';
import Navbar from './components/NavBar/NavBar'
import Landing from './components/Landing/Landing'
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
          <img src={atomic} className="App-logo" alt="logo" />
          <h2>Welcome to Fit-Init</h2>
        </div>
        <Router>
          <div>
            <Navbar color={'pink'}/>
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
      <Landing />
    </div>
  )
}


export default App;
