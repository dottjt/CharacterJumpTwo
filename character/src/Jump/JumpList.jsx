import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Utility
import AppTop from '../Utility/AppTop.jsx';
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';
import AppText from '../Utility/AppText.jsx';


// CSS
import './Jump.css';    

class JumpList extends Component {
  
  render() {

    let store = this.props.state.reducer;
    
    return (
      <main>

        <div className="App__title__container">
          <AppTitle title="Jumps"/>
          <AppTop title="New Jump" tooltip="Write about something." link="/dashboard/jumps/new"/>
        </div>
        
        <List jumps={store.jumps}/>

      </main>
    );  
  }
}

let List = ({jumps}) => (
  <div className="App__items">
    {
      jumps.length > 0
    ?
      jumps.map(jump => (
        <Jump key={jump.id} jump={jump}/>
      ))
    :
      <div>You have not created any jumps.</div>
    }
  </div>        
)

let Jump = ({key, jump}) => (
  <div className="App__item" key={key}>
  
    <div className="App__item__top">
      <div className="App__item__top__left">
        <AppTitleSecondary title={jump.inserted_at}/>
      </div>

      <Link className="App__button__secondary" to={`/dashboard/jumps/${jump.inserted_at}`}>
        view
      </Link>
    </div>

    <AppText text={jump.text}/>

  </div>
)

export default JumpList;