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
