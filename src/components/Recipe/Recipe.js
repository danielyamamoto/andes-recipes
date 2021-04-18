import React, { Component } from 'react';
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
        console.log(this.props.recipes);
        
        return(
            <div className={classes.recipe}>
                {this.props.loading ? <Spinner /> : null }
                <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                    <h1>Kitchen&nbsp;Recipes</h1>
                    <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                        <img src={svgSelect} alt="Select the recipe" />
                        <p>SELECT A RECIPE</p>
                    </div>
                </div>

                <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')} >
                    <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                        <p>Mixed Berry Melody</p>
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
                                        <p>Perritos</p>
                                    </div>
                                </div>

                                <div className={[classes.flexContainer, classes.flexContainer__itemsStart].join(' ')}>
                                    <input type="checkbox" id="c2" value="" />
                                    <label htmlFor="c2"></label>
                                    <div>
                                        <p>Gatitos</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2>Instructions</h2>
                        <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit ridiculus enim, bibendum urna metus eu curabitur mollis velit. Cum sed cursus nisl velit aenean curae nascetur fermentum, at urna orci primis non pellentesque in mus tellus, cubilia suspendisse maecenas vel habitasse litora ridiculus. Facilisis malesuada lacinia lectus at vivamus sociosqu convallis, maecenas a conubia ullamcorper scelerisque dictum orci nec, varius cursus magna odio lacus pulvinar.
                        </p>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
const mapStateToProps = state => {
    return {
        recipes: state.recipeViewer.recipes,
        loading: state.recipeViewer.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRecipes: () => dispatch(actions.fetchRecipes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);