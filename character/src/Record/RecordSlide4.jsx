import React, { Component } from 'react';
import './Record.css';
import { Link } from 'react-router-dom';

// Components
import RecordProgressBar from './RecordProgressBar.jsx';
import { NextPage, PageLink } from './RecordUtility.jsx';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';

class RecordSlide4 extends Component {

  render() {

    let store = this.props.store.reducer;
    let actions = this.props.actions;

    let date = `${new Date().setDate()}-${new Date().setMonth()}-${new Date.setFullYear()}`;
    
    return (
      <main>
        
        <AppTitle title="Step 4 - Journal"/>
        
        <AppTitleSecondary title={date}/>
        
        <Journal  inputJournalText={store.inputJournalText}
                  changeJournalText={actions.changeJournalText}/>

        <div className="RS__bottom">
          <PageLink text="previous page" link="" clickFunction={() => actions.pageBackward()}/>
          <PageLink text="next page" link="/dashboard/record/step-2" selectedNarratives={store.selectedNarratives} clickFunction={() => actions.pageForward()}/>
        </div>

      </main>
    )
  }
}

let Journal = ({inputJournalText, changeJournalText}) => (
  <div class="RS__journal">
    <textarea className="App__textarea" value={inputJournalText} onChange={e => changeJournalText(e.target.value)} cols="30" rows="10"/>
  </div>
)


export default RecordSlide4;