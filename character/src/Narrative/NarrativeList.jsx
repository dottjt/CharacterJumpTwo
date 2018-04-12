import React, { Component } from 'react';

// Components

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppText from '../Utility/AppText.jsx';

// CSS
import './Narrative.css';

class NarrativeList extends Component {
  render() {

    let store = this.props.state.reducer;

    return (
      <main>

        <AppTitle title="Narratives"/>
        <List narratives={store.narratives}/>
        
      </main>
    );
  }
}

let List = ({narratives}) => (
    narratives
  ?
    narratives.map(narrative => (
      <Individual key={narrative.id} text={narrative.text}/>
    ))
  :
    <div>You have no created any narratives.</div>
)

let Individual = ({text}) => (
    <AppText text={text}/>
)


export default NarrativeList;