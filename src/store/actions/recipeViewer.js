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

export const recipeReloadAfterSendForm = (recipeData) => {
    return dispatch => {
        dispatch(sendRecipeForm(recipeData));
        dispatch(fetchRecipes());
    }
};

export const sendRecipeForm = recipeData => {
    return dispatch => {
        dispatch(recipeFormStart());
        
        axios.post('/recipes.json', recipeData)
            .then(response => {
                dispatch(recipeFormSuccess(response.data.name, recipeData.data));
            })
            .catch(error => {
                dispatch(recipeFormFailed(error));
            });
    };
};