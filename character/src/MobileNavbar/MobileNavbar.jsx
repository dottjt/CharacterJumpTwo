import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// components

import './MobileNavbar.css';

class MobileNavbar extends Component {

  state = { openNavbar: false } 

  openNavbar = () => this.setState({openNavbar: !this.state.openNavbar})

  render() {
           
    let openNavbar = this.state.openNavbar ? "MNav__hamburger__menu--open" : "";

    return (
      <nav className="MNav" role="navigation">
        <h1 className="MNav__logo">Character Jump MOB</h1>

        <div className="MNav__hamburger" onClick={() => this.openNavbar()}></div>

        <ul className={`MNav__hamburger__menu ${openNavbar}`}>
          <a className="MNav__item" href="/dashboard"><li>Dashboard</li></a>
          <a className="MNav__item" href="/dashboard/characters"><li>Characters</li></a>
          <a className="MNav__item" href="/dashboard/journals"><li>Journals</li></a>

          <a className="MNav__item" href="/dashboard/timeline"><li>Timeline</li></a>
          <a className="MNav__item" href="/guides"><li>Guides</li></a>
          
          {/* <a className="Nav__item" href="/dashboard/analytics"><li>Analytics</li></a> */}
        </ul>
      </nav>
    );
  }
}

export default MobileNavbar;

