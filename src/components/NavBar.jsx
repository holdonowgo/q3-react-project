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
            <TopBarTitle><Link className="navbar__title" to="/">Home</Link></TopBarTitle>
            <TopBarRight><Link className="navbar__right" to="/two">Two</Link>
            </TopBarRight>
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
