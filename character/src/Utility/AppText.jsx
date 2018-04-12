import React, { Component } from 'react';

let AppText = ({text, className}) => (
    text && className 
  ?
    <p className={`App__text ${className}`}>
      {text}
    </p>
  :
    <p className="App__text">
      {text}
    </p>

)

export default AppText
