import { SagaIterator } from 'redux-saga';
import { fork, takeLatest, all } from 'redux-saga/effects';

import {setCharacterSaga,
        setCharacterFormSaga,

        // MNC - NewCharacter

        changeDisplayNameSaga,
        changeDescriptionSaga,
        changeJournalTextSaga,
        changeAdditionalDisplayNameSaga,
        changeAdditionalTextSaga,
        
        // Timeline

        setTimelineSaga,

        // Journal

        setJournalSaga,
        selectJournalCategorySaga,

        // MRC - Record
        pageForwardSaga,
        pageBackwardSaga,

        selectCharacterSaga,
        unselectCharacterSaga,
        selectNarrativeCharacterSaga,
        unselectNarrativeCharacterSaga,
        selectNarrativeSaga,
        unselectNarrativeSaga,
        
        // MNCTP - NewCharacterTraitPicker

        selectCategorySaga,
        selectTraitSaga,
        removeTraitSaga,

        // MNCTP - ASYNC NewCharacterTraitPicker

        newCharacterSaga,
        editCharacterSaga,
        removeCharacterSaga,

        // MIC - ASYNC IndividualCharacter

        newNarrativeSaga,
        editNarrativeSaga,
        removeNarrativeSaga,

        newJournalSaga,
        editJournalSaga,
        removeJournalSaga,

        editDescriptionSaga,

        newAdditionalSaga,
        editAdditionalSaga,
        removeAdditionalSaga,

        initialStateSaga } from './actions';

export default function* rootSaga() {
  yield all([

    // INITIAL STATE

    fork(initialStateSaga),

    // MNC - NewCharacter

    takeLatest('SET_CHARACTER', setCharacterSaga),
    takeLatest('SET_CHARACTER_FORM', setCharacterFormSaga),

    takeLatest('CHANGE_DISPLAY_NAME', changeDisplayNameSaga),
    takeLatest('CHANGE_DESCRIPTION', changeDescriptionSaga),

    takeLatest('CHANGE_JOURNAL_TEXT', changeJournalTextSaga),
    takeLatest('CHANGE_NEW_ADDITIONAL_DISPLAY_NAME', changeAdditionalDisplayNameSaga),
    takeLatest('CHANGE_NEW_ADDITIONAL_TEXT', changeAdditionalTextSaga),

    // Timeline

    takeLatest('SET_TIMELINE', setTimelineSaga),

    // Journal

    takeLatest('SET_JOURNAL', setJournalSaga),
    takeLatest('SELECT_JOURNAL_CATEGORY', selectJournalCategorySaga),

    // MRC - Record

    takeLatest('PAGE_FORWARD', pageForwardSaga),
    takeLatest('PAGE_BACKWARD', pageBackwardSaga),

    takeLatest('SELECT_CHARACTER', selectCharacterSaga),
    takeLatest('UNSELECT_CHARACTER', unselectCharacterSaga),

    takeLatest('SELECT_NARRATIVE_CHARACTER', selectNarrativeCharacterSaga),
    takeLatest('UNSELECT_NARRATIVE_CHARACTER', unselectNarrativeCharacterSaga),
    
    takeLatest('SELECT_NARRATIVE', selectNarrativeSaga),
    takeLatest('UNSELECT_NARRATIVE', unselectNarrativeSaga),

    // MNCTP - NewCharacterTraitPicker

    takeLatest('SELECT_CATEGORY', selectCategorySaga),
    takeLatest('SELECT_TRAIT', selectTraitSaga),
    takeLatest('REMOVE_TRAIT', removeTraitSaga),

    // MNCTP - ASYNC NewCharacterTraitPicker

    takeLatest('NEW_CHARACTER', newCharacterSaga),
    takeLatest('EDIT_CHARACTER', editCharacterSaga),
    takeLatest('REMOVE_CHARACTER', removeCharacterSaga),

    // MIC - ASYNC IndividualCharacter

    takeLatest('NEW_NARRATIVE', newNarrativeSaga),
    takeLatest('EDIT_NARRATIVE', editNarrativeSaga),
    takeLatest('REMOVE_NARRATIVE', removeNarrativeSaga),

    takeLatest('NEW_JOURNAL', newJournalSaga),
    takeLatest('EDIT_JOURNAL', editJournalSaga),
    takeLatest('REMOVE_JOURNAL', removeJournalSaga),

    takeLatest('EDIT_DESCRIPTION', editDescriptionSaga),

    takeLatest('NEW_ADDITIONAL', newAdditionalSaga),
    takeLatest('EDIT_ADDITIONAL', editAdditionalSaga),
    takeLatest('REMOVE_ADDITIONAL', removeAdditionalSaga),
  ])
}

