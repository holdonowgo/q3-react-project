import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {

  static propTypes = {
  color: PropTypes.string,
  }
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    const { color } = this.props

    return (
      <Menu tabular inverted pointing color={color} key={color}>
        <Link to="/"><Menu.Item
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        >Home
        </Menu.Item></Link>

          <Link to="/dashboard"><Menu.Item
          name='dashboard'
          active={activeItem === 'dashboard'}
          onClick={this.handleItemClick}
        >
        Dashboard
        </Menu.Item></Link>

        <Link to="/exercises"><Menu.Item
          name='Exercises'
          active={activeItem === 'Exercises'}
          onClick={this.handleItemClick}
        >
          Exercises
        </Menu.Item></Link>

        <Link to="/routines"><Menu.Item
          name='Routines'
          active={activeItem === 'Routines'}
          onClick={this.handleItemClick}
        >
          Routines
        </Menu.Item></Link>

        <Link to="/signup"><Menu.Item
          name='SignUp'
          active={activeItem === 'SignUp'}
          onClick={this.handleItemClick}
        >
          Signup
        </Menu.Item></Link>

        <Link to="/login"><Menu.Item
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
          Login
        </Menu.Item></Link>

        <Link to="/logout"><Menu.Item
          name='Logout'
          active={activeItem === 'LogOut'}
          onClick={this.handleItemClick}
        >
          Logout
        </Menu.Item></Link>
      </Menu>
    )
  }
}
