import { put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import axios from 'axios';

import { history } from './store';


// MNC - NewCharacter

export const setCharacter = character_id => ({type: 'SET_CHARACTER', character_id});
export const setCharacterSuccess = character_id => ({type: 'SET_CHARACTER_SUCCESS', character_id});

export const setCharacterForm = character_id => ({type: 'SET_CHARACTER_FORM', character_id});
export const setCharacterFormSuccess = character_id => ({type: 'SET_CHARACTER_FORM_SUCCESS', character_id});

export function* setCharacterSaga(action) {
  yield put(setCharacterSuccess(action.character_id));
}
export function* setCharacterFormSaga(action) {
  yield put(setCharacterFormSuccess(action.character_id));
}


export const changeDisplayName = text => ({type: 'CHANGE_DISPLAY_NAME', text});
export const changeDisplayNameSuccess = text => ({type: 'CHANGE_DISPLAY_NAME_SUCCESS', text});

export const changeDescription = text => ({type: 'CHANGE_DESCRIPTION', text});
export const changeDescriptionSuccess = text => ({type: 'CHANGE_DESCRIPTION_SUCCESS', text});


export const changeNarrativeNewText = text => ({type: 'CHANGE_NEW_NARRATIVE_TEXT', text});
export const changeNarrativeNewTextSuccess = text => ({type: 'CHANGE_NEW_NARRATIVE_TEXT_SUCCESS', text});

export const changeJournalText = text => ({type: 'CHANGE_JOURNAL_TEXT', text});
export const changeJournalTextSuccess = text => ({type: 'CHANGE_JOURNAL_TEXT_SUCCESS', text});

export const changeAdditionalDisplayName = text => ({type: 'CHANGE_NEW_ADDITIONAL_DISPLAY_NAME', text});
export const changeAdditionalDisplayNameSuccess = text => ({type: 'CHANGE_NEW_ADDITIONAL_DISPLAY_NAME_SUCCESS', text});

export const changeAdditionalText = text => ({type: 'CHANGE_NEW_ADDITIONAL_TEXT', text});
export const changeAdditionalTextSuccess = text => ({type: 'CHANGE_NEW_ADDITIONAL_TEXT_SUCCESS', text});


export function* changeDisplayNameSaga(action) {
  yield put(changeDisplayNameSuccess(action.text));
}
export function* changeDescriptionSaga(action) {
  yield put(changeDescriptionSuccess(action.text));
}
export function* changeJournalTextSaga(action) {
  yield put(changeJournalTextSuccess(action.text));
}
export function* changeNarrativeNewTextSaga(action) {
  yield put(changeNarrativeNewTextSuccess(action.text));
}
export function* changeAdditionalDisplayNameSaga(action) {
  yield put(changeAdditionalDisplayNameSuccess(action.text));
}
export function* changeAdditionalTextSaga(action) {
  yield put(changeAdditionalTextSuccess(action.text));
}


// Timeline

export const setTimeline = timeline_id => ({type: 'SET_TIMELINE', timeline_id});
export const setTimelineSuccess = timeline_id => ({type: 'SET_TIMELINE_SUCCESS', timeline_id});

export function* setTimelineSaga(action) {
  yield put(setTimelineSuccess(action.timeline_id));
}


// Journal

export const setJournal = journal_id => ({type: 'SET_JOURNAL', journal_id});
export const setJournalSuccess = journal_id => ({type: 'SET_JOURNAL_SUCCESS', journal_id});

export const selectJournalCategory = category => ({type: 'SELECT_JOURNAL_CATEGORY', category});
export const selectJournalCategorySuccess = category => ({type: 'SELECT_JOURNAL_CATEGORY_SUCCESS', category});

export function* setJournalSaga(action) {
  yield put(setJournalSuccess(action.journal_id));
}
export function* selectJournalCategorySaga(action) {
  yield put(selectJournalCategorySuccess(action.category));
}


// MRC - Record 

export const pageForward = page => ({type: 'PAGE_FORWARD', page});
export const pageForwardSuccess = page => ({type: 'PAGE_FORWARD_SUCCESS', page});

export const pageBackward = page => ({type: 'PAGE_BACKWARD', page});
export const pageBackwardSuccess = page => ({type: 'PAGE_BACKWARD_SUCCESS', page});

export function* pageForwardSaga(action) {
  yield put(pageForwardSuccess(action.page));
}

export function* pageBackwardSaga(action) {
  yield put(pageBackwardSuccess(action.page));
}


export const selectCharacter = character => ({type: 'SELECT_CHARACTER', character});
export const selectCharacterSuccess = character => ({type: 'SELECT_CHARACTER_SUCCESS', character});

export const unselectCharacter = character => ({type: 'UNSELECT_CHARACTER', character});
export const unselectCharacterSuccess = character => ({type: 'UNSELECT_CHARACTER_SUCCESS', character});


export const selectNarrativeCharacter = (character, character_id) => ({type: 'SELECT_NARRATIVE_CHARACTER', character, character_id});
export const selectNarrativeCharacterSuccess = (character, character_id) => ({type: 'SELECT_NARRATIVE_CHARACTER_SUCCESS', character, character_id});

export const unselectNarrativeCharacter = (character, character_id) => ({type: 'UNSELECT_NARRATIVE_CHARACTER', character, character_id});
export const unselectNarrativeCharacterSuccess = (character, character_id) => ({type: 'UNSELECT_NARRATIVE_CHARACTER_SUCCESS', character, character_id});


export const selectNarrative = narrative => ({type: 'SELECT_NARRATIVE', narrative});
export const selectNarrativeSuccess = narrative => ({type: 'SELECT_NARRATIVE_SUCCESS', narrative});

export const unselectNarrative = narrative => ({type: 'UNSELECT_NARRATIVE', narrative});
export const unselectNarrativeSuccess = narrative => ({type: 'UNSELECT_NARRATIVE_SUCCESS', narrative});

export function* selectCharacterSaga(action) {
  yield put(selectCharacterSuccess(action.character));
}

export function* unselectCharacterSaga(action) {
  yield put(unselectCharacterSuccess(action.character));
}

export function* selectNarrativeCharacterSaga(action) {
  yield put(selectNarrativeCharacterSuccess(action.character, action.character_id));
}

export function* unselectNarrativeCharacterSaga(action) {
  yield put(unselectNarrativeCharacterSuccess(action.character, action.character_id));
}

export function* selectNarrativeSaga(action) {
  yield put(selectNarrativeSuccess(action.narrative));
}

export function* unselectNarrativeSaga(action) {
  yield put(unselectNarrativeSuccess(action.narrative));
}



// MNCTP - NewCharacterTraitPicker

export const selectCategory = category => ({type: 'SELECT_CATEGORY', category});
export const selectCategorySuccess = category => ({type: 'SELECT_CATEGORY_SUCCESS', category});

export const selectTrait = trait => ({type: 'SELECT_TRAIT', trait});
export const selectTraitSuccess = trait => ({type: 'SELECT_TRAIT_SUCCESS', trait});

export const removeTrait = id => ({type: 'REMOVE_TRAIT', id});
export const removeTraitSuccess = id => ({type: 'REMOVE_TRAIT_SUCCESS', id});

export function* selectCategorySaga(action) {
  yield put(selectCategorySuccess(action.category));
}
export function* selectTraitSaga(action) {
  yield put(selectTraitSuccess(action.trait));
}
export function* removeTraitSaga(action) {
  yield put(removeTraitSuccess(action.id));
}




// MNCTP - ASYNC NewCharacterTraitPicker

export const newCharacter = character => ({type: 'NEW_CHARACTER', character});
export const newCharacterSuccess = character => ({type: 'NEW_CHARACTER_SUCCESS', character});

export const editCharacter = (character, character_id) => ({type: 'EDIT_CHARACTER', character, character_id});
export const editCharacterSuccess = (character, character_id) => ({type: 'EDIT_CHARACTER_SUCCESS', character, character_id});

export const removeCharacter = character_id => ({type: 'REMOVE_CHARACTER', character_id});
export const removeCharacterSuccess = character_id => ({type: 'REMOVE_CHARACTER_SUCCESS', character_id});

let newCharacterApi = character => axios.post('http://localhost:4000/api/characters/', {character: character});
let editCharacterApi = (character, character_id) => axios.put('http://localhost:4000/api/characters/' + character_id, {character: character});
let removeCharacterApi = character_id => axios.delete('http://localhost:4000/api/characters/' + character_id);

export function* newCharacterSaga(action) {
  let data = yield call(newCharacterApi, action.character);  
  yield put(newCharacterSuccess(data.data));
  yield history.push(`/dashboard/characters/${data.data.secondary_id}-${data.data.name}`)
}
export function* editCharacterSaga(action) {
  let data = yield call(editCharacterApi, action.character, action.character_id);
  yield put(editCharacterSuccess(data.data, data.data.id));
  yield history.push(`/dashboard/characters/${data.data.secondary_id}-${data.data.name}`)  
}
export function* removeCharacterSaga(action) {
  yield call(removeCharacterApi, action.character_id);
  yield put(removeCharacterSuccess(action.character_id));
  yield history.push("/dashboard/characters")
}



// MIC - ASYNC IndividualCharacter 

export const newNarrative = (narrative, selectAsWell, character_id) => ({type: 'NEW_NARRATIVE', narrative, selectAsWell, character_id});
export const newNarrativeSuccess = (narrative, character_id) => ({type: 'NEW_NARRATIVE_SUCCESS', narrative, character_id});

export const editNarrative = (narrative, character_id) => ({type: 'EDIT_NARRATIVE', narrative, character_id});
export const editNarrativeSuccess = (narrative, character_id) => ({type: 'EDIT_NARRATIVE_SUCCESS', narrative, character_id});

export const removeNarrative = (narrative_id, character_id) => ({type: 'REMOVE_NARRATIVE', narrative_id, character_id});
export const removeNarrativeSuccess = (narrative_id, character_id) => ({type: 'REMOVE_NARRATIVE_SUCCESS', narrative_id, character_id});


export const newJournal = (journal, character_id) => ({type: 'NEW_JOURNAL', journal, character_id});
export const newJournalSuccess = (journal, character_id) => ({type: 'NEW_JOURNAL_SUCCESS', journal, character_id});

export const editJournal = (journal, character_id) => ({type: 'EDIT_JOURNAL', journal, character_id});
export const editJournalSuccess = (journal, character_id) => ({type: 'EDIT_JOURNAL_SUCCESS', journal, character_id});

export const removeJournal = (journal_id, character_id) => ({type: 'REMOVE_JOURNAL', journal_id, character_id});
export const removeJournalSuccess = (journal_id, character_id) => ({type: 'REMOVE_JOURNAL_SUCCESS', journal_id, character_id});


export const editDescription = (description, character_id) => ({type: 'EDIT_DESCRIPTION', description, character_id});
export const editDescriptionSuccess = (description, character_id) => ({type: 'EDIT_DESCRIPTION_SUCCESS', description, character_id});


export const newAdditional = (additional, character_id) => ({type: 'NEW_ADDITIONAL', additional, character_id});
export const newAdditionalSuccess = (additional, character_id) => ({type: 'NEW_ADDITIONAL_SUCCESS', additional, character_id});

export const editAdditional = (additional, character_id) => ({type: 'EDIT_ADDITIONAL', additional, character_id});
export const editAdditionalSuccess = (additional, character_id) => ({type: 'EDIT_ADDITIONAL_SUCCESS', additional, character_id});

export const removeAdditional = (additional_id, character_id) => ({type: 'REMOVE_ADDITIONAL', additional_id});
export const removeAdditionalSuccess = (additional_id, character_id) => ({type: 'REMOVE_ADDITIONAL_SUCCESS', additional_id});

let newNarrativeApi = narrative => axios.post('http://localhost:4000/api/narratives/', {narrative: narrative});
let editNarrativeApi = narrative => axios.put('http://localhost:4000/api/narratives/' + narrative.id, {narrative: narrative});
let removeNarrativeApi = narrative_id => axios.delete('http://localhost:4000/api/narratives/' + narrative_id);

let newJournalApi = journal => axios.post('http://localhost:4000/api/journals/', {journal: journal});
let editJournalApi = journal => axios.put('http://localhost:4000/api/journals/' + journal.id, {journal: journal});
let removeJournalApi = journal_id => axios.delete('http://localhost:4000/api/journals/' + journal_id);

let editDescriptionApi = description => axios.put('http://localhost:4000/api/descriptions/', {description: description});

let newAdditionalApi = additional => axios.post('http://localhost:4000/api/additionals/', {additional: additional});
let editAdditionalApi = additional => axios.put('http://localhost:4000/api/additionals/' + additional.id, {additional: additional});
let removeAdditionalApi = additional_id => axios.delete('http://localhost:4000/api/additionals/' + additional_id);


export function* newNarrativeSaga(action) {
  if(action.selectAsWell === true) {

  } else {
    let data = yield call(newNarrativeApi, action.narrative);
    yield put(newNarrativeSuccess(data.data, data.data.id));  
  }
  
}

export function* editNarrativeSaga(action) {
  let data = yield call(editNarrativeApi, action.narrative);    
  yield put(editNarrativeSuccess(data.data, data.data.id));
}

export function* removeNarrativeSaga(action) {
  let data = yield call(removeNarrativeApi, action.narrative_id);
  yield put(removeNarrativeSuccess(action.narrative_id));
}


export function* newJournalSaga(action) {
    let data = yield call(newJournalApi, action.journal);
    yield put(newJournalSuccess(data.data, data.data.id));
}

export function* editJournalSaga(action) {
    let data = yield call(editJournalApi, action.journal);    
    yield put(editJournalSuccess(data.data, data.data.id));
}

export function* removeJournalSaga(action) {
    let data = yield call(removeJournalApi, action.journal_id);
    yield put(removeJournalSuccess(action.journal_id));
}


export function* editDescriptionSaga(action) {
  let data = yield call(editDescriptionApi, action.description);    
  yield put(editDescriptionSuccess(data.data, data.data.id));
}


export function* newAdditionalSaga(action) {
  let data = yield call(newAdditionalApi, action.additional);
  yield put(newAdditionalSuccess(data.data, data.data.id));
}

export function* editAdditionalSaga(action) {
  let data = yield call(editAdditionalApi, action.additional);    
  yield put(editAdditionalSuccess(data.data, data.data.id));
}

export function* removeAdditionalSaga(action) {
  let data = yield call(removeAdditionalApi, action.additional_id);        
  yield put(removeAdditionalSuccess(action.additional_id));
}





// INITIAL STATE

export const initialState = () => ({type: 'INITIAL_STATE'});
export const initialStateSuccess = data => ({type: 'INITIAL_STATE_SUCCESS', data});

let initialStateApi = () => axios.get('http://localhost:4000/api/initial_state');

export function* initialStateSaga() {
  let data = yield call(initialStateApi);

  yield put(initialStateSuccess(data.data));
  
  let path = window.location.pathname.split("/");

  if(path[2] === "record" && path.length === 2) {
    return 
  }

  if(path.length > 3) {
  
    if(path[2] === "journals") {
      let journal_id = path[3];
      yield put(setJournalSuccess(journal_id)); return
    }

    if(path[2] === "characters" && path[4] === "edit") {
      let secondary_id = path[3].split("-")[0];
      yield put(setCharacterFormSuccess(secondary_id)); return
    }

    if(path[2] === "characters") {
      let secondary_id = path[3].split("-")[0];
      yield put(setCharacterSuccess(secondary_id)); return
    }

    if(path[2] === "timeline") {
      let id = path[3];
      yield put(setTimelineSuccess(id)); return
    }
  }    
}

