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

export const removeRecipeStart = () => {
    return {
        type: actionTypes.REMOVE_RECIPE_START
    }
};

export const removeRecipeCancel = () => {
    return {
        type: actionTypes.REMOVE_RECIPE_CANCEL
    }
};