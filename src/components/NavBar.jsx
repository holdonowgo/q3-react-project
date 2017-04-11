import React, { PropTypes, Component } from 'react';
import {Link} from 'react-router-dom';
// import {
//   Row,
//   Column,
//   TopBar,
//   TopBarTitle,
//   TopBarRight,
// } from 'react-foundation';
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
      <Menu tabular inverted color={color} key={color}>
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
      </Menu>
    )
  }
}
