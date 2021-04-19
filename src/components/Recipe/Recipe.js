import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import classes from './Recipe.module.scss';
import svgSelect from '../../assets/img/hamburger.svg';
import svgRemove from '../../assets/img/trash.svg';
import svgStarEmpty from '../../assets/img/star_empty.svg';
import svgStarFull from '../../assets/img/star_full.svg';
import * as actions from '../../store/actions/index';

class Recipe extends Component {
    componentDidMount() {
        this.props.onFetchRecipes();
    }

    render() {
        const recipesArray = [];
        for(let key in this.props.recipes) {
            recipesArray.push({
                id: key,
                config: this.props.recipes[key]
            });
        }

        let recipe = null;
        if(!this.props.initialRecipes && this.props.recipes.length > 0) {
            recipe = (
                <Fragment>
                    <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                        <h1>Kitchen&nbsp;Recipes</h1>
                        <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                            <img src={svgSelect} alt="Select the recipe" />
                            <p>SELECT A RECIPE</p>
                        </div>
                    </div>

                    <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')} >
                        <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                            <p>{recipesArray[0].config.recipeData.recipeName.value}</p>
                            <div></div>
                            <p>Review</p>
                            <div>
                                <img src={svgStarFull} alt="Starfull" />
                                <img src={svgStarFull} alt="Starfull" />
                                <img src={svgStarFull} alt="Starfull" />
                                <img src={svgStarEmpty} alt="Starfull" />
                                <img src={svgStarEmpty} alt="Starfull" />
                            </div>
                        </div>
                        <div>
                            <img src={svgRemove} alt="Select the recipe" />
                        </div>
                    </div>

                    <div className={[classes.flexContainer, classes.flexContainer__column, classes.flexContainer__itemsStart].join(' ')}>
                        <div>
                            <h2>Ingredients</h2>
                            <ul>
                                <li>
                                    <div className={[classes.flexContainer, classes.flexContainer__itemsStart].join(' ')}>
                                        <input type="checkbox" id="c1" value="" />
                                        <label htmlFor="c1"></label>
                                        <div>
                                            <p>{recipesArray[0].config.recipeData.ingredientName.value}</p>
                                        </div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2>Instructions</h2>
                            <div><p>{recipesArray[0].config.recipeData.instructions.value}</p></div>
                        </div>
                    </div>
                </Fragment>
            );
        }
        else {
            recipe = (
                <h1>There are not recipes in the database</h1>
            )
        }


        return(
            <div className={classes.recipe}>
                {this.props.loading ? <Spinner /> : recipe}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        recipes: state.recipeViewer.recipes,
        initialRecipes: state.recipeViewer.initializatingRecipes,
        loading: state.recipeViewer.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRecipes: () => dispatch(actions.fetchRecipes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);