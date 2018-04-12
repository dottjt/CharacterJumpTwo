import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from "react-chartjs-2";

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTopDashboard from '../Utility/AppTopDashboard.jsx';
import ViewAll from '../Utility/ViewAll.jsx';

import { generateChartOptions, generateChartData } from '../Utility/ChartFunctions';

// CSS
import "./Dashboard.css"

class Dashboard extends Component {
  
  render() {

    let store = this.props.state.reducer;
    let actions = this.props.actions;

    return (
      <main>

        <AppTitle title="Overview"/>
        <AppTopDashboard/>

        {/* <Timeline timeline={store.timeline}/>*/}
        <TimelineChart timeline={store.timeline} characters={store.characters}/>        
        <ViewAll title="View timeline" link="/dashboard/timeline"/>

        <RecordActivity/>

        <CharacterList characters={store.characters}/>
        <ViewAll title="View characters" link="/dashboard/characters"/>
        
        {/* <Menu/> */}

      </main>
    );
  }
}


let RecordActivity = () => (
  <div className="Dash__record">

  </div>
)

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

let Timeline = ({timeline}) => (
  <ul className="Dash__timeline">
    { 
      timeline.length > 0
    ?
      timeline.map(day => (
        <IndividualDay key={day.id} day={day}/>
      ))
    :
      <li>You have no recorded days.</li>
    }
  </ul>
)

let IndividualDay = ({key, day}) => (
  <li className="Dash__day" key={key}>
    <h6 className="Dash__day__inserted_at">
      {day.inserted_at}
    </h6>
    <Link className="Dash__day__link" to={`/dashboard/timelines/${key}`}>
      show. 
    </Link>
  </li>
)

let CharacterList = ({characters}) => (
  <ul className="Dash__characters">
    {
      characters.length > 0
    ?
      characters.map(character => (
        <IndividualCharacter key={character.id} character={character}/>
      ))
    :
      <li>You have no characters</li>
    }
  </ul>
)

let IndividualCharacter = ({key, character}) => (
  <Link className="Dash__character" key={key} to={`/dashboard/characters/${character.secondary_id}-${character.name}`}>
    <h6 className="Dash__character__display_name">
      {character.display_name}
    </h6>
    {/* <Link className="Dash__character__link" to={`/dashboard/characters/${character.secondary_id}__${character.name}`}>
      show. 
    </Link> */}
  </Link>
)

let Menu = () => (
  <div className="Dash__menu">
    <Link className="Dash__item" to='/dashboard/characters'> 
      <h3 className="Dash__item__title">
        Characters
      </h3>
    </Link>
    <Link className="Dash__item" to='/dashboard/timeline'> 
      <h3 className="Dash__item__title">
        Timeline
      </h3>
    </Link>
    <Link className="Dash__item" to='/dashboard/analytics'> 
      <h3 className="Dash__item__title">
        Analytics
      </h3>
    </Link>
    <Link className="Dash__item" to='/dashboard/journals'>
      <h3 className="Dash__item__title">
        Journals
      </h3>
    </Link>
  </div>
)


export default Dashboard;
