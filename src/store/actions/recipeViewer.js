import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addRecipeStart = () => {
    return {
        type: actionTypes.ADD_RECIPE_START
    };
};

export const addRecipeCancel = () => {
    return {
        type: actionTypes.ADD_RECIPE_CANCEL
    };
};

export const addIngredientStart = () => {
    return {
        type: actionTypes.ADD_INGREDIENT_START
    };
};

export const addIngredientFinished = () => {
    return {
        type: actionTypes.ADD_INGREDIENT_FINISHED
    };
};

export const selectRecipeStart = () => {
    return {
        type: actionTypes.SELECT_RECIPE_START
    };
};

export const selectRecipeCancel = () => {
    return {
        type: actionTypes.SELECT_RECIPE_CANCEL
    };
};

export const addIngredient = () => {
    return dispatch => {
        dispatch(addIngredientStart());
        dispatch(addIngredientFinished());
    };
};

export const fetchRecipesStart = () => {
    return {
        type: actionTypes.FETCH_RECIPE_START
    };
};

export const fetchRecipesSuccess = recipes => {
    return {
        type: actionTypes.FETCH_RECIPE_SUCCESS,
        recipes: recipes
    };
};

export const fetchRecipesFailed = error => {
    return {
        type: actionTypes.FETCH_RECIPE_FAILED,
        error: error
    };
};

export const fetchRecipes = () => {
    return dispatch => {
        dispatch(fetchRecipesStart());
        
        axios.get('/recipes.json')
            .then(res => {
                const fetchRecipes = [];
                for(let key in res.data) {
                    fetchRecipes.push({...res.data[key], id: key});
                }
                dispatch(fetchRecipesSuccess(fetchRecipes));
            })
            .catch(err => {
                dispatch(fetchRecipesFailed(err));
            });
    };
};

export const recipeFormStart = () => {
    return {
        type: actionTypes.RECIPE_FORM_START
    };
};

export const recipeFormSuccess = (id, recipeData) => {
    return {
        type: actionTypes.RECIPE_FORM_SUCCESS,
        recipeId: id,
        recipeData: recipeData
    };
};

export const recipeFormFailed = error => {
    return {
        type: actionTypes.RECIPE_FORM_FAILED,
        error: error
    };
};

export const sendRecipeForm = recipeData => {
    return dispatch => {
        dispatch(recipeFormStart());

        axios.post('/recipes.json', recipeData)
            .then(response => {
                dispatch(recipeFormSuccess(response.data.name, recipeData.data));
                dispatch(fetchRecipes());
            })
            .catch(error => {
                dispatch(recipeFormFailed(error));
            });
    };
};

export const removeRecipeStart = () => {
    return {
        type: actionTypes.REMOVE_RECIPE_START
    };
};

export const removeRecipeSuccess = status => {
    return {
        type: actionTypes.REMOVE_RECIPE_SUCCESS,
        status: status
    };
};

export const removeRecipeFailed = error => {
    return {
        type: actionTypes.REMOVE_RECIPE_FAILED,
        error: error
    };
};

export const removeRecipe = recipeId => {
    return dispatch => {
        dispatch(removeRecipeStart());

        axios.delete('/recipes/' + recipeId + '.json/')
            .then(response => {
                dispatch(removeRecipeSuccess(response.status));
                dispatch(fetchRecipes());
            })
            .catch(error => {
                dispatch(removeRecipeFailed(error));
            });
    };
};