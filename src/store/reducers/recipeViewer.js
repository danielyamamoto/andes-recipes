import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    recipes: [],
    addRecipe: false,
    addIngredient: false,
    initialIngredients: 1,
    initializatingRecipes: true,
    loading: false,
    sending: false
}

const addRecipeStart = (state, action) => {
    return updateObject(state, {addRecipe: true});
};

const addRecipeCancel = (state, action) => {
    return updateObject(state, {
        addRecipe: false, 
        addIngredient: false,
        sending: false,
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

const fetchRecipesStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const fetchRecipesSuccess = (state, action) => {
    return updateObject(state, {
        recipes: action.recipes,
        loading: false,
        initializatingRecipes: false
    });
}

const fetchRecipesFailed = (state, action) => {
    return updateObject(state, {loading: false});
}

const sendFormStart = (state, action) => {
    return updateObject(state, {loading: true});
}

const sendFormSuccess = (state, action) => {
    const newRecipe = updateObject(action.recipeData, {id: action.recipeId});
    return updateObject(state, {
        sending: true,
        loading: false,
        recipe: state.recipes.concat(newRecipe),
    });
}

const sendFormFailed = (state, action) => {
    return updateObject(state, {loading: false});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_RECIPE_START: return addRecipeStart(state, action);
        case actionTypes.ADD_RECIPE_CANCEL: return addRecipeCancel(state, action);
        case actionTypes.ADD_INGREDIENT_START: return addIngredientStart(state, action);
        case actionTypes.ADD_INGREDIENT_FINISHED: return addIngredientFinished(state, action);
        case actionTypes.FETCH_RECIPE_START: return fetchRecipesStart(state, action);
        case actionTypes.FETCH_RECIPE_SUCCESS: return fetchRecipesSuccess(state, action);
        case actionTypes.FETCH_RECIPE_FAILED: return fetchRecipesFailed(state, action);
        case actionTypes.RECIPE_FORM_START: return sendFormStart(state, action);
        case actionTypes.RECIPE_FORM_SUCCESS: return sendFormSuccess(state, action);
        case actionTypes.RECIPE_FORM_FAILED: return sendFormFailed(state, action);
        default: return state;
    }
}

export default reducer;