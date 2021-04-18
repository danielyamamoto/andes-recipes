import React, { Component, Fragment } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import NewRecipe from '../../components/Recipe/NewRecipe/NewRecipe';
import BGImages from '../../components/UI/BGImages/BGImages';

import classes from './RecipeViewer.module.scss';

class RecipeViewer extends Component {
    state = {
        addingRecipe: true
    }

    addingContinueHandler = () => {
        this.setState({addingRecipe: true});
    }

    addingCancelHandler = () => {
        this.setState({addingRecipe: false});
    }

    render() {
        return(
            <Fragment>
                <Modal show={this.state.addingRecipe} modalClosed={this.addingCancelHandler}>
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

export default RecipeViewer;