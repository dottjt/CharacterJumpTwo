import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let AppTop = ({title, tooltip, link, type}) => (
  <div className="App__top">
    <div className="App__top__item">
      <Link className="App__button" to={`${link}`}>
        {title}
      </Link>
      <p className="App__top__tooltip" >
        {tooltip}
      </p>
    </div>
  </div>
)

export default AppTop
