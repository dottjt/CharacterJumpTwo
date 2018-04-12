import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Utility
import AppTitleSecondary from './AppTitleSecondary.jsx';
import AppTitle from './AppTitle.jsx';


let _404 = () => (
  <main>
    <AppTitle title="I'm sorry, but this page doesn't exist!"/>
    <Link to="/dashboard">
      <AppTitleSecondary title="Return to dashboard"/>
    </Link>
  </main>
)

export default _404

