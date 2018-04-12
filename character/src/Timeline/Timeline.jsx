import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from "react-chartjs-2";

// Utility
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';
import AppTitle from '../Utility/AppTitle.jsx';
import AppTop from '../Utility/AppTop.jsx';

import { splitDate } from '../Utility/HelperFunctions';
import { generateChartOptions, generateChartData } from '../Utility/ChartFunctions';



// CSS
import './Timeline.css';


class Timeline extends Component {
  render() {

    let store = this.props.state.reducer;

    return (
      <main>

        <div className="App__title__container">
          <AppTitle title="Timeline"/>
          <AppTop   title="New Jump" tooltip="Record today's activity." link="/dashboard/jumps/new"/>
        </div>

        <TimelineChart timeline={store.timeline} characters={store.characters}/>        

        <List timeline={store.timeline} />
        
      </main>
    );
  }
}

let TimelineChart = ({timeline, characters}) => {

  const data = generateChartData(timeline, characters, "all");
  const options = generateChartOptions();

  return (
    <div>
      <Bar  data={data} 
            options={options}
            height={150}/>
    </div>
  )
}


let List = ({timeline}) => (
  <div className="Time__days">
    { 
      timeline
    ?
      timeline.map(day => (
        <Individual key={day.id}
                    id={day.id}
                    inserted_at={day.inserted_at}
                    characters={day.characters}
                    narratives={day.narratives}/>
      ))
    :
      <div className="App__item Time__day">No day recorded.</div>
    }    
  </div>
)

let Individual = ({key, id, inserted_at, characters, narratives}) => (
  <div className="App__item" key={key}>
    <IndividualTop inserted_at={inserted_at}
                   id={id}/>
    
    <div className="Time__individual__main">
      <CharacterList characters={characters}/>
      <NarrativeList narratives={narratives}/>
    </div>

  </div>
)

let IndividualTop = ({inserted_at, id}) => (
  <div className="App__item__top">
    <div className="App__item__top__left">
      <AppTitleSecondary title={splitDate(inserted_at)}/>
    </div>
    <Link className="App__button__secondary" to={`/dashboard/timeline/${id}`}>
      view
    </Link> 
  </div>
)

let CharacterList = ({characters}) => (
  <div className="Time__characters">
    {characters.map(character => (
      <Character key={character.id} 
                display_name={character.display_name}/>
    ))
    }
  </div>
)


let Character = ({key, display_name}) => (
  <div key={key} className="Time__character">
    <h3 className="Time__character-display_name">
      {display_name}
    </h3>
  </div>
)


let NarrativeList = ({narratives}) => (
  <div className="Time__narratives">
    {narratives.map(narrative => (
      <Narrative key={narrative.id} 
                display_name={narrative.display_name}/>
    ))
    }
  </div>
)


let Narrative = ({key, display_name}) => (
  <div key={key} className="Time__narrative">
    <h3 className="Time__narrative-display_name">
      {display_name}
    </h3>
  </div>
)

export default Timeline;
