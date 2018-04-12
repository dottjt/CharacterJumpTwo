// Libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { history } from './redux/store';

// Components
import Header from './Header/Header.jsx';
import Navbar from './Navbar/Navbar.jsx';
import MobileNavbar from './MobileNavbar/MobileNavbar.jsx';
import Dashboard from './Dashboard/Dashboard.jsx';

import CharacterList from './Character/CharacterList.jsx';
import CharacterIndividual from './Character/CharacterIndividual.jsx';
import CharacterNew from './Character/CharacterNew.jsx';

import JumpNew from './Jump/JumpNew.jsx';
import JumpIndividual from './Jump/JumpIndividual.jsx';
import JumpList from './Jump/JumpList.jsx';

import JournalNew from './Journal/JournalNew.jsx';
import JournalIndividual from './Journal/JournalIndividual.jsx';
import JournalList from './Journal/JournalList.jsx';

import NarrativeNew from './Narrative/NarrativeNew.jsx';
import NarrativeList from './Narrative/NarrativeList.jsx';

import Timeline from './Timeline/Timeline.jsx';
import TimelineIndividual from './Timeline/TimelineIndividual.jsx';

import RecordSlide1 from './Record/RecordSlide1.jsx';
import RecordSlide2 from './Record/RecordSlide2.jsx';
import RecordSlide3 from './Record/RecordSlide3.jsx';
import RecordSlide4 from './Record/RecordSlide4.jsx';

import ScrollToTop from './Utility/ScrollToTop.jsx';
import _404 from './Utility/_404.jsx';

// Actions
import {setCharacter,
        setCharacterForm,

        changeDisplayName,
        changeDescription,
        changeJournalText,
        changeAdditionalDisplayName,
        changeAdditionalText,

        setTimeline,
        
        setJournal,
        selectJournalCategory,

        pageForward,
        pageBackward,

        selectCharacter,
        unselectCharacter,
        selectNarrativeCharacter,
        unselectNarrativeCharacter,
        selectNarrative,
        unselectNarrative,

        selectCategory,
        selectTrait,
        removeTrait,

        newCharacter,
        editCharacter,
        removeCharacter, 

        newNarrative,
        editNarrative,
        removeNarrative,

        newJournal,
        editJournal,
        removeJournal,

        editDescription,

        newAdditional,
        editAdditional,
        removeAdditional,

        initialState } from './redux/actions';

// CSS
import './App.css';
import './Reset.css';

class App extends Component {

  render() {
    return (
      <ConnectedRouter history={history}>
        <ScrollToTop>
          <div className="App">
            {/* <Header {...this.props}/> */}

            <Navbar {...this.props}/>
            <MobileNavbar {...this.props}/>
            
            <Switch>
              <Route exact path="/dashboard" render={props => <Dashboard {...props} {...this.props}/>}/> 

              <Route exact path="/dashboard/characters" render={props => <CharacterList {...props} {...this.props}/>}/>
              <Route       path="/dashboard/characters/new" render={props => <CharacterNew {...props} {...this.props}/>}/>
              
              <Route exact path="/dashboard/characters/:character_name" render={props => <CharacterIndividual {...props} {...this.props}/>}/>
              <Route       path="/dashboard/characters/:character_name/edit" render={props => <CharacterNew {...props} {...this.props}/>}/>

              <Route exact path="/dashboard/journals" render={props => <JournalList {...props} {...this.props}/>}/>
              <Route       path="/dashboard/journals/new" render={props => <JournalNew {...props} {...this.props}/>}/>
              <Route       path="/dashboard/journals/:journal_name" render={props => <JournalIndividual {...props} {...this.props}/>}/>
              
              {/* <Route       path="/dashboard/narratives" render={props => <NarrativeList {...props} {...this.props}/>}/>
              <Route       path="/dashboard/narratives/new" render={props => <NarrativeNew {...props} {...this.props}/>}/> */}

              {/* <Route       path="/dashboard/record" render={props => <Record {...props} {...this.props}/>}/> */}

              <Route exact path="/dashboard/record" render={props => <RecordSlide1 {...props} {...this.props}/>}/>
              <Route       path="/dashboard/record/step-2" render={props => <RecordSlide2 {...props} {...this.props}/>}/>
              <Route       path="/dashboard/record/step-3" render={props => <RecordSlide3 {...props} {...this.props}/>}/>
              <Route       path="/dashboard/record/step-4" render={props => <RecordSlide4 {...props} {...this.props}/>}/>
              
              <Route exact path="/dashboard/timeline" render={props => <Timeline {...props} {...this.props}/>}/>
              <Route       path="/dashboard/timeline/:id" render={props => <TimelineIndividual {...props} {...this.props}/>}/>

              <Route render={props => <_404 {...props} {...this.props}/>} />
              
            </Switch>
          </div>
        </ScrollToTop>        
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      
      // MNC - CharacterNew

      setCharacter: character_id => {
        dispatch(setCharacter(character_id))
      },

      setCharacterForm: character_id => {
        dispatch(setCharacterForm(character_id))
      },


      changeDisplayName: text => {
        dispatch(changeDisplayName(text))
      },

      changeDescription: text => {
        dispatch(changeDescription(text))
      },

      changeJournalText: (text) => {
        dispatch(changeJournalText(text))
      },

      changeAdditionalDisplayName: (text) => {
        dispatch(changeAdditionalDisplayName(text))
      },

      changeAdditionalText: (text) => {
        dispatch(changeAdditionalText(text))
      },

      // Timeline

      setTimeline: (timeline_id) => {
        dispatch(setTimeline(timeline_id))
      },

      // Journal

      setJournal: (journal_id) => {
        dispatch(setJournal(journal_id))
      },

      selectJournalCategory: (category) => {
        dispatch(selectJournalCategory(category))
      },

      // MRC - Record 

      pageForward: character => {
        dispatch(pageForward(character))
      },

      pageBackward: character => {
        dispatch(pageBackward(character))
      },


      selectCharacter: character => {
        dispatch(selectCharacter(character))
      },

      unselectCharacter: character => {
        dispatch(unselectCharacter(character))
      },


      selectNarrativeCharacter: (character, character_id) => {
        dispatch(selectNarrativeCharacter(character, character_id))
      },

      unselectNarrativeCharacter: (character, character_id) => {
        dispatch(unselectNarrativeCharacter(character, character_id))
      },
      

      selectNarrative: narrative => {
        dispatch(selectNarrative(narrative))
      },

      unselectNarrative: narrative => {
        dispatch(unselectNarrative(narrative))
      },

      // MNCTP - CharacterNewTraitPicker

      selectCategory: category => {
        dispatch(selectCategory(category))
      },
      selectTrait: trait => {
        dispatch(selectTrait(trait))
      },
      removeTrait: id => {
        dispatch(removeTrait(id))
      },

      // MNCTP - ASYNC CharacterNewTraitPicker

      newCharacter: character => {
        dispatch(newCharacter(character))
      },

      editCharacter: (character, character_id) => {
        dispatch(editCharacter(character, character_id))
      },

      removeCharacter: character_id => {
        dispatch(removeCharacter(character_id))
      },

      // MIC - CharacterIndividual

      newNarrative: (narrative, selectAsWell, character_id) => {
        dispatch(newNarrative(narrative, selectAsWell, character_id))
      },

      editNarrative: (narrative, character_id) => {
        dispatch(editNarrative(narrative, character_id))
      },

      removeNarrative: (narrative_id, character_id) => {
        dispatch(removeNarrative(narrative_id, character_id))
      },


      newJournal: (journal, character_id) => {
        dispatch(newJournal(journal, character_id))
      },

      editJournal: (journal, character_id) => {
        dispatch(editJournal(journal, character_id))
      },

      removeJournal: (journal_id, character_id) => {
        dispatch(removeJournal(journal_id, character_id))
      },


      editDescription: (description, character_id) => {
        dispatch(editDescription(description, character_id))
      },


      newAdditional: (additional, character_id) => {
        dispatch(newAdditional(additional, character_id))
      },

      editAdditional: (additional, character_id) => {
        dispatch(editAdditional(additional, character_id))
      },

      removeAdditional: (additional_id, character_id) => {
        dispatch(removeAdditional(additional_id, character_id))
      }
    }
  }
}


const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
 

export default AppContainer;
