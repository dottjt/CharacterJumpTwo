import React, { Component } from 'react';

// Components
import CharacterNewTraitPicker from './CharacterNewTraitPicker';

// Utility
import AppTitle from '../Utility/AppTitle.jsx';
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';

// CSS
import './Character.css';

class CharacterNew extends Component {

  constructor(props) {
    super(props);

    this.state = { editPage: this.props.match.url.split("/")[3] === "edit" ? true : false };
  }

  render() {
    let state = this.state;
    let store = this.props.state.reducer;
    let actions = this.props.actions;
    
    let setCharacter = this.props.state.reducer.setCharacter;

    let character_id = 
      setCharacter !== undefined ? setCharacter.id : ""

    let character = 
        state.editPage
      ?
        {
          display_name: store.inputDisplayName,
          description: {...setCharacter.description, text: store.inputDescription},
          traits: store.selectedTraits, 
          // journals: [],
          // additionals: []
        }
      :
        {
          display_name: store.inputDisplayName,
          description: {text: store.inputDescription},
          traits: store.selectedTraits,
          // journals: [],
          // additionals: []
        }
  
    return (
      <main>

        <PageTitle editPage={state.editPage} />

        <InputFields  inputDisplayName={store.inputDisplayName} 
                      inputDescription={store.inputDescription} 
                      changeDisplayName={actions.changeDisplayName} 
                      changeDescription={actions.changeDescription} />

        <CharacterNewTraitPicker {...this.props}/>
        
        <Save editPage={state.editPage} 
              character_id={character_id} 
              character={character} 
              editCharacter={actions.editCharacter} 
              newCharacter={actions.newCharacter} />

      </main>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    let reducer = this.props.state.reducer;
    if (reducer.setCharacter !== nextProps.state.reducer.setCharacter) return true;
    
    if (reducer.inputDisplayName !== nextProps.state.reducer.inputDisplayName) return true;
    if (reducer.inputDescription !== nextProps.state.reducer.inputDescription) return true;

    if (reducer.selectedTraits !== nextProps.state.reducer.selectedTraits) return true;
    if (reducer.selectedCategory !== nextProps.state.reducer.selectedCategory) return true;
    if (reducer.categories !== nextProps.state.reducer.categories) return true;    
    if (reducer.traits !== nextProps.state.reducer.traits) return true;

    return false;      
  }
}

let PageTitle = ({editPage}) => (
    editPage
  ?
    <AppTitle title="Edit Character"/>
  :
    <AppTitle title="New Character"/>
)

let InputFields = ({inputDisplayName, inputDescription, changeDisplayName, changeDescription}) => (
  <div className="CN__fields">
    
    <div className="CN__field">
      <AppTitleSecondary title="Name"/>
      <input className="App__input CN__name__input" value={inputDisplayName} onChange={e => changeDisplayName(e.target.value)} type="text"/>
    </div>

    <div className="CN__field">
      <AppTitleSecondary title="Description"/>
      <textarea className="App__textarea" value={inputDescription} onChange={e => changeDescription(e.target.value)} type="text"/>
    </div>

  </div>
)

let InputField = () => (
  <div className="CN__field">
  </div>
)


let Save = ({editPage, character_id, character, editCharacter, newCharacter}) => (
  <div className="CN__save__container">
    {
      editPage
    ?
      <div className="App__button" onClick={() => editCharacter(character, character_id)}>
        Edit. 
      </div>
    :
      <div className="App__button" onClick={() => newCharacter(character)}>
        Save. 
      </div>
    }
  </div>
)

// let characterType = (editPage, inputDisplayName, inputDescription, description, selectedTraits) => (

    // let character = 
    //   setCharacter !== undefined ? characterType(state.editPage, store.inputDisplayName, store.inputDescription, store.setCharacter.description, store.selectedTraits) : {}


// )


export default CharacterNew;




