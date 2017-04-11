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
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          name='editorials'
          active={activeItem === 'editorials'}
          onClick={this.handleItemClick}
        >
          <Link to="/">Home</Link>
        </Menu.Item>

        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        >
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          <Link to="/exercises">Exercises</Link>
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        >
          <Link to="/routines">Routines</Link>
        </Menu.Item>
      </Menu>
    )
  }
}
// { isAuthenticated }
// !isAuthenticated ?
// :<Link to="/logout">Log out</Link>

// class Navbar extends Component {
//
//   render() {
//     return (
//       <TopBar className="navbar">
//         <Row>
//           <Column>
//             <TopBarTitle><Link className="navbar" to="/">Home</Link></TopBarTitle>
//             <TopBarTitle><Link className="navbar" to="/dashboard">Dashboard</Link>
//           </TopBarTitle>
//             <TopBarTitle><Link className="navbar" to="/exercises">Exercises</Link>
//           </TopBarTitle>
//             <TopBarTitle><Link className="navbar" to="/routines">Routines</Link>
//           </TopBarTitle>
//           </Column>
//         </Row>
//       </TopBar>
//     );
//   }
// }
//
// export default (Navbar);
//
// Navbar.propTypes = {
//   isAuthenticated: PropTypes.bool
// };
