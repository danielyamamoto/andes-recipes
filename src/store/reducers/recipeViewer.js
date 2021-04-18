import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    addRecipe: false,
    removeRecipe: false,
    loading: false
}

const addRecipeStart = (state, action) => {
    return updateObject(state, {addRecipe: true});
};

const addRecipeCancel = (state, action) => {
    return updateObject(state, {addRecipe: false});
};

const removeRecipeStart = (state, action) => {
    return updateObject(state, {removeRecipe: true});
};

const removeRecipeCancel = (state, action) => {
    return updateObject(state, {removeRecipe: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE_START: return addRecipeStart(state, action);
        case actionTypes.ADD_RECIPE_CANCEL: return addRecipeCancel(state, action);
        case actionTypes.REMOVE_RECIPE_START: return removeRecipeStart(state, action);
        case actionTypes.REMOVE_RECIPE_CANCEL: return removeRecipeCancel(state, action);
        default: return state;
    }
}

export default reducer;