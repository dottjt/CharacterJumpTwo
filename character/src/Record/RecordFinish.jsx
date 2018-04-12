import React, { Component } from 'react';
import './Record.css';
import { Link } from 'react-router-dom';

// Components
import RecordProgressBar from './RecordProgressBar.jsx';
import { NextPage, PageLink } from './RecordUtility.jsx';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';

class RecordFinish extends Component {

  render() {

    let store = this.props.store.reducer;
    let actions = this.props.actions;

    let date = `${new Date().setDate()}-${new Date().setMonth()}-${new Date.setFullYear()}`;
    
    return (
      <main>

        <AppTitle title="Complete!"/>
        
        <AppTitleSecondary title="Summary"/>
        
        <WhereToNext />

      </main>
    )
  }
}

let WhereToNext = () => (
  <div>
    <p>Feel free to explore these characters more in-depth.</p>
  </div>
)


export default RecordFinish;