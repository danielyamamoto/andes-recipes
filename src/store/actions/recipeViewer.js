import * as actionTypes from './actionTypes';

export const addRecipeStart = () => {
    return {
        type: actionTypes.ADD_RECIPE_START
    }
};

export const addRecipeCancel = () => {
    return {
        type: actionTypes.ADD_RECIPE_CANCEL
    }
};

export const addIngredientStart = () => {
    return {
        type: actionTypes.ADD_INGREDIENT_START
    }
};

export const addIngredientFinished = () => {
    return {
        type: actionTypes.ADD_INGREDIENT_FINISHED
    }
};

export const addIngredient = () => {
    return dispatch => {
        dispatch(addIngredientStart());
        dispatch(addIngredientFinished());
    };
};