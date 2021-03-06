import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';

import classes from './SelectRecipes.module.scss';

class SelectRecipes extends Component {
    render() {
        const recipesArray = [];
        for(let key in this.props.recipes) {
            recipesArray.push({
                id: key,
                config: this.props.recipes[key]
            });
        }

        return (
            <Fragment>
                {recipesArray.map(recipeElement => (
                    <div key={recipeElement.id} className={classes.selectRecipes}>
                        <p>{recipeElement.config.recipeData.recipeName.value}</p>
                    </div>
                ))}
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        recipes: state.recipeViewer.recipes,
        addRecipeStart: state.recipeViewer.addRecipe
    };
};

export default connect(mapStateToProps)(SelectRecipes);