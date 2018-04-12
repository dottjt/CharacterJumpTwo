import React, { Component } from 'react';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppText from '../Utility/AppText.jsx';

// CSS
import './Jump.css';

class JumpIndividual extends Component {

  render() {

    let store = this.props.state.reducer;
    let setJump = this.props.state.reducer.setJump;

    return (
      <main>

        <AppTitle title={setJump.inserted_at}/>
        <AppText text={setJump.text}/>
      
      </main>
    )
  }
}

export default JumpIndividual;
