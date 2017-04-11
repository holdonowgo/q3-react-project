import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router-dom';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
} from 'react-foundation';
// { isAuthenticated }
// !isAuthenticated ?
// :<Link to="/logout">Log out</Link>

class Navbar extends Component {

  render() {
    return (
      <TopBar className="navbar">
        <Row>
          <Column>
            <TopBarTitle><Link className="navbar" to="/">Home</Link></TopBarTitle>
            <TopBarTitle><Link className="navbar" to="/dashboard">Dashboard</Link>
          </TopBarTitle>
            <TopBarTitle><Link className="navbar" to="/exercises">Exercises</Link>
          </TopBarTitle>
            <TopBarTitle><Link className="navbar" to="/routines">Routines</Link>
          </TopBarTitle>
          </Column>
        </Row>
      </TopBar>
    );
  }
}

export default (Navbar);

Navbar.propTypes = {
  isAuthenticated: PropTypes.bool
};
