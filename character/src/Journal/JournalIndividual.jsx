import React, { Component } from 'react';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppText from '../Utility/AppText.jsx';

// CSS
import './Journal.css';

class JournalIndividual extends Component {

  render() {

    let store = this.props.state.reducer;
    let setJournal = this.props.state.reducer.setJournal;

    return (
      <main>

        <AppTitle title={setJournal.inserted_at}/>
        <AppText text={setJournal.text}/>
      
      </main>
    )
  }
}

export default JournalIndividual;
