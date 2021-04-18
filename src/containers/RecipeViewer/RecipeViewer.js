import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import NewRecipe from '../../components/Recipe/NewRecipe/NewRecipe';
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
                
                <div className={[classes.reciperViewer, classes.flexContainer].join(' ')}>
                    <div>
                        HOLA
                    </div>
                    <BGImages />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        addRecipeStart: state.recipeViewer.addRecipe
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddRecipeCancel: () => dispatch(actions.addRecipeCancel())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(RecipeViewer);