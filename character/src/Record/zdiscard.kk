import React, { Component } from 'react';
import './Record.css';
import { Link } from 'react-router-dom';

class Record extends Component {
  
  constructor() {
    super();

    this.state = {
      page: 1,
      help: false,
      newCharacter: false,
      progressBar: [
        { display_name: "Step 1 - Identify Narratives", page: 1 },
        { display_name: "Step 2 - Record Characters", page: 2 },
        { display_name: "Step 3 - Discover Patterns", page: 3 },
        { display_name: "Step 4 - Additional Notes", page: 4 }
      ],
    }
  }

  newCharacter = () => this.setState({ newCharacter: !this.state.newCharacter });

  pageForward = () => this.setState({ page: this.state.page + 1 });
  pageBackward = () => this.setState({ page: this.state.page - 1 });

  progressBar = () => (
    <ul className="MRC-progression-bar">
      {this.state.progressBar.map(progress =>
        progress.page === this.state.page
        ?
          <li className="MRC-progression-item-selected">{progress.display_name}</li>  
        :
          <li className="MRC-progression-item">{progress.display_name}</li>
      )
      }
    </ul>
  )

  render() {

    let { chooseCharacters, 
          selectedCharacters, 
          chooseNarratives, 
          selectedNarratives } = this.props.state.reducer;

    let { selectCharacter, 
          unselectNarrativeCharacter, 
          selectNarrativeCharacter, 
          unselectNarrativeCharacter, 
          selectNarrative, 
          unselectNarrative,

          newNarrative
          } = this.props.actions;
    
    switch(this.state.page) {

    // Slide 1

      case 1:
        return (
          <main>
            <h1 className="App__title">
              Step 1 - Identify Narratives
            </h1>

            {this.progressBar()}

            <div className="MRC-slide">
              
              <h4 className="MRC-slide-title">What thoughts or narratives did your mind have today?</h4>
              
              <div className="MRC-input-container">
                <input className="MRC-input" type="text" placeholder="New narrative"/>
                <div className="MRC-symbol" onClick={() => newNarrative()}>
                  +
                </div>
              </div>
              
              {/* SELECTED NARRATIVES */}

              {/* <h4 className="MRC-slide-title">Select previous narratives from below or create new ones here.</h4> */}

              {selectedNarratives.length > 0
              ?
                <div className="MRC-slide-selected-container">
                  {selectedNarratives.map(selectedNarrative => (
                    <div className="MRC-selected" key={selectedNarrative.id} onClick={() => unselectNarrative(selectedNarrative)}>
                      <h4>
                        {selectedNarrative.text}
                      </h4>
                      <div className="MRC-symbol">
                        -
                      </div>
                    </div>
                    )
                    )
                  }
                </div>
              :
                <div className="MRC-slide-selected-container">
                </div>
              }


              {/* PREVIOUS NARRATIVES */}

              <h4 className="MRC-slide-title">Previous Narratives</h4>
              <div className="MRC-slide-selected-container">
                {chooseNarratives.map(selectionNarrative => (
                  <div className="MRC-selection" key={selectionNarrative.id} onClick={() => selectNarrative(selectionNarrative)}>
                    <h4>
                      {selectionNarrative.text}
                    </h4>
                    <div className="MRC-symbol">
                      +
                    </div>
                  </div>
                )
                )
                }
              </div>
              
            </div>

            <div className="MRC-bottom-bar">
              {selectedNarratives.length > 0
              ?
                <div className="MRC-next-page" onClick={() => this.pageForward()}>
                  next page
                </div>
              :
                <div className="MRC-next-page-blank">
                  next page
                </div>
              }
            </div>
          </main>
        )


    // SLIDE 2

      case 2:
        return (
          <main id="step-2"> 
            <h1 className="App__title">
              Step 2 - Record Characters  
            </h1>

            <div className="MRC-slide">

              {/* PAIR NARRATIVES WITH CHARACTERS */}

              <h2 className="MRC-slide-title">Narratives</h2>

              {selectedNarratives.map(narrative => (

                <div className="MRC-selected-narrative">
                  <h3 className="MRC-selected-narrative-text">
                    {narrative.text}
                  </h3>

                  <div className="MRC-selected-narrative-character-list">
                    {this.state.newCharacter 
                    ?
                    <div className="MRC-input-container">
                      <input className="MRC-input" type="text"/>
                      <div className="MRC-symbol">
                        +
                      </div>
                    </div>

                    :
                      <div className="MRC-selected" onClick={() => this.newCharacter()}>
                        add new character
                      </div>
                    }

                    {chooseCharacters.map(selectionCharacter => (
                      <div className="MRC-selected" key={selectionCharacter.id} onClick={() => selectNarrativeCharacter(selectionCharacter)}>
                        <h4>
                          {selectionCharacter.display_name}
                        </h4>
                        <div className="MRC-symbol">
                          +
                        </div>
                      </div>
                      )
                      )
                    }
                  </div>
                </div>

              )
              )
              }

              {/* BOTTOM BAR */}

              <div className="MRC-bottom-bar">
                <div className="MRC-next-page" onClick={() => this.pageBackward()}>
                  previous page
                </div>
                <div className="MRC-next-page-blank" onClick={() => this.pageForward()}>
                  next page
                </div>
              </div>
            </div>

          </main>
        )


    // Slide 3

      case 3:
        return (
          <main>
            <h1 className="App__title">
              Step 3 - Discover patterns  
            </h1>

            <div className="MRC-slide">
              <h4 className="MRC-slide-title">
                Did you notice any patterns or relations between characters? 
              </h4>

              <div className="MRC-slide-character-box">

              </div>

              <div className="MRC-slide-character-relations">
                <h4 className="MRC-slide-title">
                  Relations  
                </h4>
              </div>
            </div>

          </main>
        )

      default: 
        <main>Nothing</main>

    }
  }
}

export default Record;




// { (characters.length > 0)
//   ?
//   characters.map((character) => (
//       <li className="CB-item" key={character.id}>
//         {(selectedCharacters.filter((char)=> char.id == character.id).length > 0)
//         ?
//         <button className="CB-item-add" onClick={() => unselectNarrativeCharacter(character)}>
//           -
//         </button>
//         :
//         <button className="CB-item-add" onClick={() => selectCharacter(character)}>
//           +
//         </button>
//         }
//         <h6 className="CB-item-display_name">
//           {character.display_name}
//         </h6>
//         <Link className="CB-offscreen-show" to={`/characters/${character.secondary_id}-${character.name}`}>
//           show. 
//         </Link>
//       </li>
//     )
//   )
//   :
//   <li>
//     No characters
//   </li>
// } 





// {selectedCharacters.length > 0
//   ?
//     selectedCharacters.map(selectedCharacter => (
//       <div className="MRC-selected-character" key={selectedCharacter.id} onClick={() => unselectNarrativeCharacter(selectedCharacter)}>
//         <div className="MRC-selected-character-minus-symbol">
//           -
//         </div>
//         <h4>
//           {selectedCharacter.display_name}
//         </h4>
//       </div>
//       )
//     )
//   :
//     <div className="MRC-no-selected-characters">
//       <p className="MRC-no-selected-text">No characters recorded today.</p>
//       <div className="MRC-balanced">
//         I was balanced
//       </div>
//     </div>
//   }




            {/* {selectedNarratives.length > 0
            ?
              selectedNarratives.map(selectedNarrative => (
                <div className="MRC-selected" key={selectedNarrative.id} onClick={() => unselectNarrative(selectedNarrative)}>
                  <h4>
                    {selectedNarrative.text}
                  </h4>
                  <div className="MRC-selected-symbol">
                    -
                  </div>
                </div>
                )
              )
            :
              <div></div>
            } */}