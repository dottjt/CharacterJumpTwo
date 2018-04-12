import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import RecordProgressBar from './RecordProgressBar.jsx';
import { NextPage, PageLink, Symbol, SlideTitle } from './RecordUtility.jsx';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';
import AppText from '../Utility/AppText.jsx';

// CSS
import './Record.css';


class RecordSlide1 extends Component {

  render() {
    let store = this.props.state.reducer;
    let actions = this.props.actions; 
    
    return (
      <main>
        
        <AppTitle title="Step 1 - Identify Narratives"/>

        <div className="RS__slide">

          <NewNarrative newNarrative={actions.newNarrative}
                        changeJournalText={actions.changeJournalText}
                        inputJournalText={store.inputJournalText}/>

          <SelectedNarratives selectedNarratives={store.selectedNarratives}
                              unselectNarrative={actions.unselectNarrative}/>

          <PreviousNarratives chooseNarratives={store.chooseNarratives} 
                              selectNarrative={actions.selectNarrative}/>
          
        </div>

        <div className="RS__bottom">
          <PageLink text="previous page" 
                    link="" 
                    clickFunction={() =>actions.pageBackward}/>

          <NextPage text="next page" 
                    link="/dashboard/record/step-2" 
                    collection={store.selectedNarratives} 
                    clickFunction={() => actions.pageForward}/>
        </div>

      </main>
    )
  }
}

let NewNarrative = ({newNarrative, changeJournalText, inputJournalText}) => (
  <div className="RS__new__narrative">

    <SlideTitle title="What thoughts or narratives did you have today?"/>

    <div className="RS__narrative">
      <input className="RS__narrative__text" value={inputJournalText} onChange={e => changeJournalText(e.target.value)} placeholder="New narrative" type="text"/>
      <Symbol symbol="+" clickFunction={() => newNarrative()}/>
    </div>

  </div>
)

let SelectedNarratives = ({selectedNarratives, unselectNarrative}) => (
  selectedNarratives.length > 0
    ?
      <div className="RS__selected__narratives">
        {selectedNarratives.map(selectedNarrative => (
          <SelectedNarrative key={selectedNarrative.id}
                             selectedNarrative={selectedNarrative}
                             unselectNarrative={unselectNarrative}/>
        ))
        }
      </div>
    :
      <div className="RS__selected__narratives">No Narratives Selected</div>
)

let SelectedNarrative = ({key, selectedNarrative, unselectNarrative}) => (
  <div className="RS__narrative" key={key} onClick={() => unselectNarrative(selectedNarrative)}>

    <AppText className="RS__narrative__text" text={selectedNarrative.text}/>
    <Symbol symbol="-"/>
    
  </div>
)

let PreviousNarratives = ({chooseNarratives, selectNarrative}) => (
  <div className="RS__choose__narratives">

    <SlideTitle title="Previous Narratives"/>
  
    {chooseNarratives.map(chooseNarrative => (
      <PreviousNarrative  key={chooseNarrative.id}
                          chooseNarrative={chooseNarrative} 
                          selectNarrative={selectNarrative}/>
      ))
    }
  </div>
)

let PreviousNarrative = ({key, chooseNarrative, selectNarrative}) => (
  <div className="RS__narrative" key={key} onClick={() => selectNarrative(chooseNarrative)}>
    <AppText className="RS__narrative__text" text={chooseNarrative.text}/>
    <Symbol symbol="+"/>
  </div>
)

export default RecordSlide1;


