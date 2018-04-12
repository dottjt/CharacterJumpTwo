import React, { Component } from 'react';
import { Link } from 'react-router-dom';

let ViewAll = ({title, link}) => (
  <div className="App__view__all">
    <Link className="App__view__all__text" to={link}>
      {title}
    </Link>
  </div>
)

export default ViewAll
