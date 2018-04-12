import React, { Component } from 'react';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';

// CSS
import './Jump.css';


class JumpNew extends Component {

  render() {

    let store = this.props.state.reducer;
    let actions = this.props.actions;

    // let date = `${new Date().setDate()}-${new Date().setMonth()}-${new Date.setFullYear()}`;

    return (
      <main>
        
        <AppTitle title="New Jump"/>

        <div className="JN">
        
          <SelectedTags journalCategories={store.journalCategories}
                        selectedCharacters={store.selectedCharacters}
                        selectedNarratives={store.selectedNarratives}
                        unselectCharacter={actions.unselectCharacter}
                        unselectNarrativeCharacter={actions.unselectNarrativeCharacter}
                        />
                        
          <JumpCategories  journalCategories={store.journalCategories}
                              selectJumpCategory={actions.selectJumpCategory}/>

          <TagSelect  journalCategories={store.journalCategories}
                      chooseCharacters={store.chooseCharacters}
                      chooseNarratives={store.chooseNarratives}
                      selectCharacter={actions.selectCharacter}                        
                      selectNarrativeCharacter={actions.selectNarrativeCharacter}/>

          <InputFields  inputJumpText={store.inputJumpText}
                        changeJumpText={actions.changeJumpText}/>
                        
        </div>

        <div className="App__button" onClick={() => actions.newJump( {text: store.inputJumpText}, "" ) }>
          Save
        </div>

      </main>
    )
  }
}

let SelectedTags = ({journalCategories, selectedCharacters, selectedNarratives, unselectCharacter, unselectNarrativeCharacter}) => (
  <div>
  {journalCategories.map(cat => {
    if(cat.selected && cat.type === "general") {
      return "";
    }

    if(cat.selected && cat.type === "character") {
      return (
        <div>
          {selectedCharacters.map(character => (
            <CharacterSelect key={character.id} character={character} clickFunction={() => unselectCharacter(character)}/>
          ))
          }
        </div>
      )
    }

    if(cat.selected && cat.type === "narrative") {
      return (
        <div>
          {selectedNarratives.map(narrative => (
            <NarrativeSelect key={narrative.id} narrative={narrative} clickFunction={() => unselectNarrativeCharacter(narrative)}/>
          ))  
          }
        </div>
      )
    }
  })
  }
</div>
)

let JumpCategories = ({journalCategories, selectJumpCategory}) => (
  <div className="JN__categories">
    {journalCategories.map(category => (
      <JumpCategory  key={category.type} 
                        category={category}
                        selectJumpCategory={selectJumpCategory}/>
    ))
    }
  </div>
)

let JumpCategory = ({key, category, selectJumpCategory}) => (
  <div key={key} className={`JN__category ${category.selected ? "JN__category__selected" : ""}`} onClick={() => selectJumpCategory(category)}>
    {category.type}
  </div>
)

let TagSelect = ({journalCategories, chooseCharacters, chooseNarratives, selectNarrativeCharacter, selectCharacter}) => (
  <div>
    {journalCategories.map(cat => {
      if(cat.selected && cat.type === "general") {
        return "";
      }

      if(cat.selected && cat.type === "character") {
        return (
          <div>
            {
              chooseCharacters.length > 0
            ?
              chooseCharacters.map(character => (
                <CharacterSelect  key={character.id}
                                  character={character}
                                  clickFunction={() => selectCharacter(character)}/>
              ))
            :
              <div></div>
            }
          </div>
        )
      }

      if(cat.selected && cat.type === "narrative") {
        return (
          <div>
            {
              chooseNarratives.length > 0 
            ?
              chooseNarratives.map(narrative => (
                <NarrativeSelect  key={narrative.id}
                                  narrative={narrative}
                                  clickFunction={() => selectNarrativeCharacter(narrative)}/>
              ))  
            :
              <div></div>
            }
          </div>
        )
      }
    })
    }
  </div>
)
  
let CharacterSelect = ({key, character, clickFunction}) => (
  <div key={key} onClick={clickFunction}>
    {character.display_name}
  </div>
)

let NarrativeSelect = ({key, narrative, clickFunction}) => (
  <div key={key} onClick={clickFunction}>
    {narrative.display_name}
  </div>
)


let InputFields = ({inputJumpText, changeJumpText}) => (
  <textarea className="App__textarea" value={inputJumpText} onChange={e => changeJumpText(e.target.value)} cols="30" rows="10"/>
)


export default JumpNew;
