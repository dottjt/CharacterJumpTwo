import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from "react-chartjs-2";

// Utility
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';
import AppTitle from '../Utility/AppTitle.jsx';
import AppText from '../Utility/AppText.jsx';

import { splitDate } from '../Utility/HelperFunctions';
import { generateChartOptions, generateChartData } from '../Utility/ChartFunctions';

// CSS
import './Timeline.css';


class TimelineIndividual extends Component {
  render() {

    let store = this.props.state.reducer;
    let setTimeline = store.setTimeline;

    let inserted_at =
      setTimeline.inserted_at ? splitDate(setTimeline.inserted_at) : "" 

    return (
      <main>
        
        <AppTitle title={inserted_at}/>
        
        <TimelineChart timeline={store.timeline} 
                       characters={store.characters}
                       character_name={setTimeline.display_name}/>        

        <CharacterList characters={setTimeline.characters}/>
        <JournalList journals={setTimeline.journals}/> 
        <NarrativeList narratives={setTimeline.narratives}/>

      </main>
    );
  }
}

let TimelineChart = ({timeline, characters, character_name}) => {

  const data = generateChartData(timeline, characters, character_name);
  const options = generateChartOptions();

  return (
    <div>
      <Bar  data={data} 
            options={options}
            height={150}/>
    </div>
  )
}



let CharacterList = ({characters}) => (
  <ul className="TI__characters">
    {
      characters
    ?
      characters.map(character => (
        <IndividualCharacter key={character.id} 
                             character={character}/>
      ))
    :
      <li>You have no characters</li>
    }
  </ul>
)

let IndividualCharacter = ({key, character}) => (
  <div className="TI__character" key={key}>
    <h6 className="TI__character__display_name">
      {character.display_name}
    </h6>
  </div>
)



let NarrativeList = ({narratives}) => (
  <div className="TI__narratives">
    { narratives
    ?
      narratives.map(narrative => (
        <Narrative key={narrative.id} 
                  display_name={narrative.display_name}/>
      ))
    :
      <div>You have no narratives</div>
    }
  </div>
)


let Narrative = ({key, display_name}) => (
  <div key={key} className="TI__narrative">
    <h3 className="TI__narrative-display_name">
      {display_name}
    </h3>
  </div>
)



let JournalList = ({journals}) => (
  <ul className="TI__journals">
    { 
      journals
    ?
      journals.map(journal => (
        <JournalIndividual key={journal.id} journal={journal}/>
      ))
    :
      <p>There are no journal entries.</p>
    }
  </ul>
)

let JournalIndividual = ({key, journal}) => (
  <li className="TI__journal" key={key}>
    <AppText text={journal.inserted_at}/>
    <AppText text={journal.text}/>
  </li>
)



export default TimelineIndividual;
