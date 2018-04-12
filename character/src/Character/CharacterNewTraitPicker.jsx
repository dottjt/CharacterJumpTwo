import React, { Component } from 'react';

// Utility
import AppTitleSecondary from '../Utility/AppTitleSecondary.jsx';

// CSS
import './Character.css';


class CharacterNewTraitPicker extends Component {

  render() {

    let state = this.state;
    let store = this.props.state.reducer;
    let actions = this.props.actions;
    
    return (
      <div className="CNTP">

        <AppTitleSecondary title="Traits"/>
        <SelectedTraits selectedTraits={store.selectedTraits} removeTrait={actions.removeTrait}/>

        {/* <div className="CNTP__filters">
          <Search/>
          <CategoryBar categories={store.categories} selectCategory={actions.selectCategory}/>
        </div>  */}
        
        {/* <TraitSelection traits={store.traits} selectTrait={actions.selectTrait}/> */}

        <TraitSelectionTwo traits={store.traits} selectTrait={actions.selectTrait}/>

      </div>
    );
  }
}

let SelectedTraits = ({selectedTraits, removeTrait}) => (
  <div className="CNTP__selected__traits">
    {
      selectedTraits.length > 0
    ?
      selectedTraits.map(trait => (
        <SelectedTrait  id={trait.id}
                        key={trait.id}
                        display_name={trait.display_name}
                        removeTrait={removeTrait}/> 
      ))
    :
      <p>No traits selected</p>  
    }
  </div>
)

let SelectedTrait = ({id, key, display_name, removeTrait}) => (
  <div className="CNTP__selected__trait" key={id}>
    <p>{display_name}</p>
    <div onClick={() => removeTrait(id)}>-</div>
  </div>
)

let TraitSelectionTwo = ({traits, selectTrait}) => (
  <div>
    
  </div>
)

// let Search = () => (
//   <div className="CNTP__search">
//     <input className="App__input CNTP__search__input" type="text" placeholder="search"/>
//   </div>
// )

// let CategoryBar = ({categories, selectCategory}) => (
//   <div className="CNTP__categories">
//     {categories.map(category => (
//       <Category key={category.display_name}
//                 category={category}
//                 selectCategory={selectCategory} />
//       ))
//     }
//   </div>
// )

// let Category = ({key, category, selectCategory}) => (
//   <div key={key} className={`CNTP__category ${category.selected ? "CNTP__category__selected" : ""}`} onClick={() => selectCategory(category)}>
//     {category.display_name}
//   </div>
// )


// let TraitSelection = ({traits, selectTrait}) => (
//   <div className="CNTP__traits">
//     {
//       traits.length > 0
//     ?
//       traits.map((trait) => (
//         <TraitSelect key={trait.id} trait={trait} selectTrait={selectTrait}/>
//       ))
//     :
//       ""
//     }
//   </div>
// )

// let TraitSelect = ({key, trait, selectTrait}) => (
//     trait.selected
//   ?
//     ""
//   :
//     <div className="CNTP__trait" key={key} onClick={() => selectTrait(trait)}>
//       {trait.display_name}
//     </div>
// )

export default CharacterNewTraitPicker;


