import React, { PropTypes, Component } from 'react';
import connect from 'react-redux'
import {Link} from 'react-router-dom';
import {
  Row,
  Column,
  TopBar,
  TopBarTitle,
  TopBarRight,
  Menu,
  MenuItem
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
            <TopBarTitle className="navbar__title"><Link to="/two">Here</Link></TopBarTitle>
            <TopBarRight className="navbar__right">
              <Menu>
                <MenuItem className="menu-item">Hello
                </MenuItem>
              </Menu>
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
