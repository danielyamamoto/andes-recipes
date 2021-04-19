import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import NewRecipe from '../../components/Recipe/NewRecipe/NewRecipe';
import SelectRecipes from '../../components/Recipe/SelectRecipes/SelectRecipes';
import Recipe from '../../components/Recipe/Recipe';
import BGImages from '../../components/UI/BGImages/BGImages';

import classes from './RecipeViewer.module.scss';
import * as actions from '../../store/actions/index';

class RecipeViewer extends Component {
    render() {
        return(
            <Fragment>
                <Modal show={this.props.addRecipeStart} modalClosed={this.props.onAddRecipeCancel}>
                    <NewRecipe />
                </Modal>

                <Modal show={this.props.selectRecipe} modalClosed={this.props.onSelectRecipeCancel}>
                    <SelectRecipes />
                </Modal>
                
                <div className={[classes.reciperViewer, classes.flexContainer].join(' ')}>
                    <Recipe />
                    <BGImages />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        addRecipeStart: state.recipeViewer.addRecipe,
        selectRecipe: state.recipeViewer.selectRecipe
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddRecipeCancel: () => dispatch(actions.addRecipeCancel()),
        onSelectRecipeCancel: () => dispatch(actions.selectRecipeCancel())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeViewer);