import { categories, journalCategories, progressBar } from './state';
import { LOCATION_CHANGE } from 'react-router-redux'

let initialState = {
  user: {},
  characters: [],
  timeline: [],
  traits: [],
  journals: [],
  narratives: [],
  jumps: [],

  categories: categories,
  journalCategories: journalCategories,
  progressBar: progressBar,

  // EDIT/NEW
  setCharacter: {},
  setJournal: {},
  setTimeline: {},
  
  inputCharacterId: "",
  inputDisplayName: "",
  inputDescription: "",

  inputNarrativeText: "",
  
  inputJournalText: "",

  inputAdditionalDisplayName: "",
  inputAdditionalText: "",

  // RECORD
  slideNumber: 0,

  selectedNarratives: [],
  chooseNarratives: [],

  characterRelations: [],
  selectedCharacters: [],
  chooseCharacters: [],

  selectedTraits: [],
}


function reducer(state = initialState, action) {
  switch (action.type) {

    // INITIAL STATE 

    case 'INITIAL_STATE_SUCCESS': 
      return {
        ...state,
        characters: action.data.characters, 
        chooseCharacters: action.data.characters,

        narratives: action.data.narratives,
        chooseNarratives: action.data.narratives, 

        timeline: action.data.timeline, 
        traits: action.data.traits, 
        journals: action.data.journals
      }

    // MNC - NewCharacter

    case 'SET_CHARACTER_SUCCESS':
      return {
        ...state,
        setCharacter: state.characters.filter(char => char.secondary_id == action.character_id)[0]
      }

    case 'SET_CHARACTER_FORM_SUCCESS':
      let setCharacter = state.characters.filter(char => char.secondary_id == action.character_id)[0]

      return {
        ...state,
        setCharacter: setCharacter,
        inputDisplayName: setCharacter.display_name,
        inputDescription: setCharacter.description.text, 
        selectedTraits: setCharacter.traits,
        inputCharacterId: setCharacter.id
      }

    case 'CHANGE_DISPLAY_NAME_SUCCESS':
      return {
        ...state,
        inputDisplayName: action.text
      }
    
    case 'CHANGE_DESCRIPTION_SUCCESS': 
      return {
        ...state,
        inputDescription: action.text
      }

    case 'CHANGE_NEW_NARRATIVE_TEXT_SUCCESS':
      return {
        ...state,
        inputNarrativeNewText: action.text 
      }

    case 'CHANGE_JOURNAL_TEXT_SUCCESS':
      return {
        ...state,
        inputJournalText: action.text 
      }

    case 'CHANGE_NEW_ADDITIONAL_DISPLAY_NAME_SUCCESS':
      return {
        ...state,
        inputAdditionalDisplayName: action.text
      }

    case 'CHANGE_NEW_ADDITIONAL_TEXT_SUCCESS':
      return {
        ...state,
        inputAdditionalText: action.text
      }

      
    // Timeline

    case 'SET_TIMELINE_SUCCESS':
      return {
        ...state,
        setTimeline: state.timeline.filter(timeline => timeline.id == action.timeline_id)[0]
      }


    // Journal

    case 'SET_JOURNAL_SUCCESS':
      return {
        ...state,
        setJournal: state.journals.filter(journal => journal.id == action.journal_id)[0]
      }


    case 'SELECT_JOURNAL_CATEGORY_SUCCESS':
      return {
        ...state,
        journalCategories: state.journalCategories.map(category => category.selected || category.type === action.category.type ? {...category, selected: !category.selected} : category)
      }



    // MRC - Record 

    case 'PAGE_FORWARD_SUCCESS':
      return {
        ...state,
        slideNumber: state.slideNumber + 1
      }

    case 'PAGE_BACKWARD_SUCCESS':
      return {
        ...state,
        slideNumber: state.slideNumber - 1
      }

    case 'SELECT_CHARACTER_SUCCESS': 
      return {
        ...state,
        selectedCharacters: state.selectedCharacters.concat(action.character),
        chooseCharacters: state.chooseCharacters.filter(char => char.id !== action.character.id)
      }
    
    case 'UNSELECT_CHARACTER_SUCCESS':
      return {
        ...state,
        selectedCharacters: state.selectedCharacters.filter(char => char.id !== action.character.id),
        chooseCharacters: state.chooseCharacters.concat(action.character)
      }
    

    case 'SELECT_NARRATIVE_CHARACTER_SUCCESS': 
      return {
        ...state,
        chooseCharacters: state.chooseCharacters.map(char => char.selected === false && char.id === action.character_id ? { ...char, selected: true } : char )
      }
    
    case 'UNSELECT_NARRATIVE_CHARACTER_SUCCESS':
      return {
        ...state,
        chooseCharacters: state.chooseCharacters.map(char => char.selected === true && char.id === action.character_id ? { ...char, selected: false } : char )
      }
    
      
    
    case 'SELECT_NARRATIVE_SUCCESS': 
      return {
        ...state,
        selectedNarratives: state.selectedNarratives.concat(action.narrative),
        chooseNarratives: state.chooseNarratives.filter(char => char.id !== action.narrative.id)
      }
    
    case 'UNSELECT_NARRATIVE_SUCCESS':
      return {
        ...state,
        selectedNarratives: state.selectedNarratives.filter(char => char.id !== action.narrative.id),
        chooseNarratives: state.chooseNarratives.concat(action.narrative)
      }

      

    // MNCTP - NewCharacterTraitPicker

    case 'SELECT_CATEGORY_SUCCESS':
      return {
        ...state,
        categories: state.categories.map(category => category.selected || category.display_name === action.category.display_name ? {...category, selected: !category.selected} : category)
      }

    case 'SELECT_TRAIT_SUCCESS':
      return {
        ...state,
        selectedTraits: state.selectedTraits.concat(action.trait),
        traits: state.traits.map(trait => trait.id === action.trait.id ? {...trait, selected: true } : trait )
        }
      

    case 'REMOVE_TRAIT_SUCCESS':
      return {
        ...state,
        selectedTraits: state.selectedTraits.filter(trait => trait.id !== action.id),
        traits: state.traits.map(trait => trait.id === action.id ? {...trait, selected: false } : trait )
      }


    // MNCTP - ASYNC NewCharacterTraitPicker

    case 'NEW_CHARACTER_SUCCESS':
      return {
        ...state,
        characters: state.characters.concat(action.character)
      }

    case 'EDIT_CHARACTER_SUCCESS': 
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.character.id ? action.character : character )
      }

      
    case 'REMOVE_CHARACTER_SUCCESS':
      return {
        ...state,
        characters: state.characters.filter(character => character.id !== action.character_id)
        // router: {...state.router, location: { ...state.router.location, pathname: "/characters" } }
      }


    // MIC - ASYNC IndividualCharacter 
        
    case 'NEW_JOURNAL_SUCCESS':
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.character_id ? {...character, journals: character.journals.concat(action.journal)} : character ),
        setCharacter: { ...state.setCharacter, journals: state.setCharacter.journals.concat(action.journal) },
        inputJournalText: ""
      }

    case 'EDIT_JOURNAL_SUCCESS':
      return {
        ...state, 
        characters: state.characters.map(character => character.id === action.character_id ? {...character, journals: character.journals.map(journal => journal.id === action.journal.id ? action.journal : journal)} : character ),
        setCharacter: { ...state.setCharacter, journals: state.setCharacter.journals.map(journal => journal.id === action.journal.id ? action.journal : journal) }
      }

    case 'REMOVE_JOURNAL_SUCCESS':
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.character_id ? {...character, journals: character.journals.filter(journal => journal.id !== action.journal_id) } : character ),
        setCharacter: { ...state.setCharacter, journals: state.setCharacter.journals.filter(journal => journal.id !== action.journal_id) }
      }

    case 'EDIT_DESCRIPTION_SUCCESS':
      return {
        ...state, 
        characters: state.characters.map(character => character.id === action.character_id ? {...character, description: action.description} : character )
      }


    case 'NEW_ADDITIONAL_SUCCESS':
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.character_id ? {...character, additionals: character.additionals.concat(action.additional)} : character ),
        setCharacter: { ...state.setCharacter, additionals: state.setCharacter.additionals.concat(action.additional) },        
        selectedAdditionalDisplayNameText: "",
        inputAdditionalText: ""
      }

    case 'EDIT_ADDITIONAL_SUCCESS':
      return {
        ...state, 
        characters: state.characters.map(character => character.id === action.character_id ? {...character, additionals: character.additionals.map(additional => additional.id === action.additional.id ? action.additional : additional) } : character ),
        setCharacter: { ...state.setCharacter, additionals: state.setCharacter.additionals.map(additional => additional.id === action.additional.id ? action.additional : additional) }        
      }

    case 'REMOVE_ADDITIONAL_SUCCESS':
      return {
        ...state,
        characters: state.characters.map(character => character.id === action.character_id ? {...character, additionals: character.additionals.filter(additional => additional.id !== action.additional_id) } : character ),
        setCharacter: { ...state.setCharacter, additionals: state.setCharacter.additionals.filter(additional => additional.id !== action.additional_id) }        
      }

      
    // ROUTER CHANGE

    case LOCATION_CHANGE:

      if(state.characters.length > 0) {
        let path = action.payload.pathname.split("/");
        
        if(path[2] === "record" && path.length === 2) {
          return {
            ...state, 
            inputDisplayName: ""
          }
        }

        if(path[2] === "journals" && path.length > 3) {

          let journal_id = path[3].split("-")[0];
          let setJournal = state.journals.filter(journal => journal.id == journal_id)[0];

          // new
          if(path[4] === "new") {
            return {
              ...state, inputJournalText: ""
            }    
          }

          // individual 
          return {
            ...state,
            setJournal: state.journals.filter(journal => journal.id == journal_id)[0]
          }
        }

        if(path[2] === "characters" && path.length > 3) {

          let secondary_id = path[3].split("-")[0];
          let setCharacter = state.characters.filter(char => char.secondary_id == secondary_id)[0];
            
          if(path[4] === "edit") {
            return {
              ...state,
              setCharacter: setCharacter,
              inputDisplayName: setCharacter.display_name,
              inputDescription: setCharacter.description.text, 
              selectedTraits: setCharacter.traits,
              inputCharacterId: setCharacter.id
            }  
          }

          if(path[4] === "new") {
            return {
              ...state, inputDisplayName: "", inputDescription: "", selectedTraits: [], inputCharacterId: ""
            }    
          }

          // else, individual 
          return {
            ...state,
            setCharacter: state.characters.filter(char => char.secondary_id == secondary_id)[0]
          }

        }        
      }

      
    default:
      return state
  }
}

export default reducer;

  /*
    action.payload is something like:
    {
      pathname: '/',
      search: '',
      hash: '',
      state: null,
      action: 'PUSH',
      key: 'xwl8yl',
      query: {},
      $searchBase: {
        search: '',
        searchBase: ''
      }
    }
  */

