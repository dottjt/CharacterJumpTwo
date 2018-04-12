import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Utility
import AppTop from '../Utility/AppTop.jsx';
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';
import AppText from '../Utility/AppText.jsx';


// CSS
import './Journal.css';

class JournalList extends Component {
  
  render() {

    let store = this.props.state.reducer;
    
    return (
      <main>

        <div className="App__title__container">
          <AppTitle title="Journals"/>
          <AppTop title="New Journal" tooltip="Write about something." link="/dashboard/journals/new"/>
        </div>
        
        <List journals={store.journals}/>

      </main>
    );  
  }
}

let List = ({journals}) => (
  <div className="App__items">
    {
      journals.length > 0
    ?
      journals.map(journal => (
        <Journal key={journal.id} journal={journal}/>
      ))
    :
      <div>You have not created any journals.</div>
    }
  </div>        
)

let Journal = ({key, journal}) => (
  <div className="App__item" key={key}>
  
    <div className="App__item__top">
      <div className="App__item__top__left">
        <AppTitleSecondary title={journal.inserted_at}/>
      </div>

      <Link className="App__button__secondary" to={`/dashboard/journals/${journal.inserted_at}`}>
        view
      </Link>
    </div>

    <AppText text={journal.text}/>

  </div>
)

export default JournalList;