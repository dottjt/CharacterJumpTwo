import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components

import './Navbar.css';

class Navbar extends Component {

  render() {
           
    return (
      <nav className="Nav" role="navigation">
        <h1 className="Nav__logo">Character Jump</h1>

        <ul className="Nav__list">
          <Link className="Nav__item" to="/dashboard"><li>Dashboard</li></Link>
          <Link className="Nav__item" to="/dashboard/jumps"><li>Jumps</li></Link>          
          <Link className="Nav__item" to="/dashboard/journals"><li>Journals</li></Link>

          <Link className="Nav__item" to="/dashboard/timeline"><li>Timeline</li></Link>
          <Link className="Nav__item" to="/guides"><li>Guides</li></Link>
          
          {/* <a className="Nav__item" href="/dashboard/analytics"><li>Analytics</li></a> */}
        </ul>
      </nav>
    );
  }
}

export default Navbar;

