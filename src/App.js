import React, { Component } from 'react';
import logo from './logo.svg';
import banner from './banner.jpg';
import banner2 from './woman-dumbell-exercise.svg';
import Routines from './components/Routines';
import Dashboard from './components/Dashboard';
import Navbar from './components/NavBar'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Route exact path="/" component={IndexPage} />
        <Route path="/two" component={Hello} />
      </div>
    </Router>
    );
  };
}
const Hello = () => {
  return <div> hello </div>
}

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
export default App;
