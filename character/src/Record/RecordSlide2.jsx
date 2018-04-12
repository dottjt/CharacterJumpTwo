import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import RecordProgressBar from './RecordProgressBar.jsx';
import { NextPage, PageLink, Symbol, SlideTitle } from './RecordUtility.jsx';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppText from '../Utility/AppText.jsx';

// CSS
import './Record.css';


class RecordSlide2 extends Component {
  
  render() {
    let store = this.props.state.reducer;
    let actions = this.props.actions;

    let characterCollection = store.chooseCharacters.filter((character) => character.selected === true)

    return (
      <main> 

        <AppTitle title="Step 2 - Record Characters"/>
            
        <div className="RS__slide">
          
          <SlideTitle title="Select characters which align with your narratives."/>

          <NarrativeList  selectedNarratives={store.selectedNarratives} 
                          selectNarrativeCharacter={actions.selectNarrativeCharacter}
                          unselectNarrativeCharacter={actions.unselectNarrativeCharacter}
                          chooseCharacters={store.chooseCharacters}
                          newCharacter={actions.newCharacter}/>

        </div>

        <div className="RS__bottom">
          <PageLink text="previous page" link="/dashboard/record" clickFunction={() => actions.pageBackward()}/>
          <NextPage text="next page" link="/dashboard/record/step-3" collection={characterCollection} clickFunction={() => actions.pageForward()}/>
        </div>

      </main>
    )
  }
}

let NarrativeList = ({selectedNarratives, newCharacter, chooseCharacters, selectNarrativeCharacter, unselectNarrativeCharacter}) => (
  <div className="RS__selected__narrative__list">
    {selectedNarratives.map(narrative => (
      <NarrativeIndividual  key={narrative.id}
                            narrative={narrative} 
                            newCharacter={newCharacter} 
                            chooseCharacters={chooseCharacters} 
                            selectNarrativeCharacter={selectNarrativeCharacter}
                            unselectNarrativeCharacter={unselectNarrativeCharacter}/>
    ))
    }
  </div>  
)

let NarrativeIndividual = ({key, narrative, newCharacter, chooseCharacters, selectNarrativeCharacter, unselectNarrativeCharacter}) => (
  <div className="RS__selected__narrative" key={key}>

    <div className="RS__narrative">
      <AppText className="RS__narrative__text" text={narrative.text}/>
    </div>

    <CharacterList newCharacter={newCharacter}
                   selectNarrativeCharacter={selectNarrativeCharacter}
                   unselectNarrativeCharacter={unselectNarrativeCharacter}
                   chooseCharacters={chooseCharacters}/>
  </div>            
)

let CharacterList = ({newCharacter, chooseCharacters, selectNarrativeCharacter, unselectNarrativeCharacter}) => (
  <div className="RS__character__list">
    <NewCharacter newCharacter={newCharacter}/>

    <ChooseCharacter selectNarrativeCharacter={selectNarrativeCharacter}
                     unselectNarrativeCharacter={unselectNarrativeCharacter}
                     chooseCharacters={chooseCharacters}/>
  </div>
)

let NewCharacter = ({newCharacter}) => (
    <div className="RS__character">
      <input className="RS__character__text" type="text" placeholder="New character"/>
      <Symbol symbol="+" clickFunction={() => newCharacter()}/>
    </div>
)

let ChooseCharacter = ({chooseCharacters, selectNarrativeCharacter, unselectNarrativeCharacter}) => (
  chooseCharacters.map(selectionCharacter => (
      selectionCharacter.selected === false 
    ?
      <div className="RS__character" key={selectionCharacter.id} onClick={() => selectNarrativeCharacter(selectionCharacter, selectionCharacter.id)}>
        <AppText className="RS__character__text" text={selectionCharacter.display_name}/>
        <Symbol symbol="+"/>
      </div>
    :
      <div className="RS__character" key={selectionCharacter.id} onClick={() => unselectNarrativeCharacter(selectionCharacter, selectionCharacter.id)}>
        <AppText className="RS__character__text" text={selectionCharacter.display_name}/>
        <Symbol symbol="-"/>
      </div>
  ))
)

export default RecordSlide2;


