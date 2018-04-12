// Libraries
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components


// CC
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <HeaderLeft/>
        <HeaderRight/>
      </header>    
    );
  }
}

let HeaderLeft = () => (
  <div className="Header__left">
    <img className="Header__logo" src="" alt=""/>
    <Link to="/dashboard">Home</Link>
    <a href="/guides">Guides</a>
  </div>
)

let HeaderRight = () => (
  <div className="Header__right">
    <div className="Header__avatar">
      <img src="" alt=""/>
    </div>
  </div>
)

export default Header;
