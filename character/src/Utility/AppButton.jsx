import React, { Component } from 'react';

let AppButton = ({text, function1, function2}) => {
  if(text && function1 && function2) {
    return (
      <div className="App__button" onClick={() => { function1; function2 }}>
        {text}
      </div>
    )  
  }

  if(text && function1) {
    return (
      <div className="App__button" onClick={() => { function1 }}>
        {text}
      </div>
    )
  }

  if(text) {
    return (
      <div className="App__button">
        {text}
      </div>
    )
  }
}

export default AppButton
