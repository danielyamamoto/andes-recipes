import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    addRecipe: false,
    addIngredient: false,
    initialIngredients: 1,
    loading: false
}

const addRecipeStart = (state, action) => {
    return updateObject(state, {addRecipe: true});
};

const addRecipeCancel = (state, action) => {
    return updateObject(state, {
        addRecipe: false, 
        addIngredient: false,
        initialIngredients: 1
    });
};

const addIngredientStart = (state, action) => {
    let tmp = state.initialIngredients + 1;

    return updateObject(state, {
        addIngredient: true,
        initialIngredients: tmp,
    });
};

const addIngredientFinished = (state, action) => {
    return updateObject(state, {addIngredient: false});
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE_START: return addRecipeStart(state, action);
        case actionTypes.ADD_RECIPE_CANCEL: return addRecipeCancel(state, action);
        case actionTypes.ADD_INGREDIENT_START: return addIngredientStart(state, action);
        case actionTypes.ADD_INGREDIENT_FINISHED: return addIngredientFinished(state, action);
        default: return state;
    }
}

export default reducer;