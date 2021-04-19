import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import classes from './NewRecipe.module.scss';
import svgClose from '../../../assets/img/close.svg';
import svgDelete from '../../../assets/img/trash.svg';
import svgAdd from '../../../assets/img/add.svg';

import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { updateObject } from '../../../shared/utility';

class NewRecipe extends Component {
    state = {
        recipeForm: {
            recipeName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Recipe Name',
                    required: true,
                    pattern: '[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ_\\s]{3,20}'
                },
                value: ''
            },
            ingredientName: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Ingredient',
                    required: true,
                    pattern: '[0-9A-Za-zñÑáéíóúÁÉÍÓÚ_\\s]{3,20}'
                },
                value: ''
            },
            instructions: {
                elementType: 'textarea',
                elementConfig: {
                    maxLength: 1000,
                    placeholder: 'Instructions',
                    required: true,
                    pattern: '[A-Za-z0-9ñÑáéíóúÁÉÍÓÚ_\\s\t\n]'
                },
                value: ''
            },
        }
    }

    addRecipeHandler = event => {
        event.preventDefault();

        const formData = {};
        for(let formElementIdentifier in this.state.recipeForm) {
            formData[formElementIdentifier] = this.state.recipeForm[formElementIdentifier];
        }

        const recipe = {
            recipeData: formData
        }

        this.props.onSendForm(recipe);
        this.props.onAddRecipeCancel();
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedFormElemet = updateObject(this.state.recipeForm[inputIdentifier], {value: event.target.value}); // Get value from event
        const updatedRecipeForm = updateObject(this.state.recipeForm, {[inputIdentifier]: updatedFormElemet}); // Set the correct value to copied state
        this.setState({recipeForm: updatedRecipeForm}); // Update the state
    }

    render() {
        const formElementsArray = [];
        for(let key in this.state.recipeForm) {
            formElementsArray.push({
                id: key,
                config: this.state.recipeForm[key]
            });
        }

        const sectionOne = 
            <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                <p>New&nbsp;Recipe</p>
                <Input 
                    key={formElementsArray[0].id}
                    elementType={formElementsArray[0].config.elementType} 
                    elementConfig={formElementsArray[0].config.elementConfig} 
                    value={formElementsArray[0].config.value}
                    changed={event => this.inputChangedHandler(event, formElementsArray[0].id)}
                />
                <div onClick={this.props.onAddRecipeCancel}><img src={svgClose} alt="Close modal" /></div>
            </div>;

        const sectionTwo = 
            <div>
                <p>Ingredients</p>
                <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
                    <Input 
                        key={formElementsArray[1].id}
                        elementType={formElementsArray[1].config.elementType} 
                        elementConfig={formElementsArray[1].config.elementConfig} 
                        value={formElementsArray[1].config.value}
                        changed={event => this.inputChangedHandler(event, formElementsArray[1].id)}
                    />
                    <div><img src={svgDelete} alt="Delete ingredient" /></div>
                </div>
                <div className={[classes.flexContainer, classes.flexContainer__justifyEnd, classes.flexContainer__itemsCenter].join(' ')}>
                    <div onClick={this.props.onAddIngredient}><img src={svgAdd} alt="Delete ingredient" /></div>
                </div>
            </div>;
        
        const sectionThree = 
            <div>
                <p>Instructions</p>
                <Input 
                    key={formElementsArray[formElementsArray.length - 1].id}
                    elementType={formElementsArray[formElementsArray.length - 1].config.elementType} 
                    elementConfig={formElementsArray[formElementsArray.length - 1].config.elementConfig} 
                    value={formElementsArray[formElementsArray.length - 1].config.value}
                    changed={event => this.inputChangedHandler(event, formElementsArray[formElementsArray.length - 1].id)}
                />
            </div>;

        const form = this.props.loading ? <Spinner /> :
            <form onSubmit={this.addRecipeHandler}>
                {sectionOne}
                {sectionTwo}
                {sectionThree}
                <div className={[classes.flexContainer, classes.flexContainer__justifyEnd, classes.flexContainer__itemsCenter].join(' ')}>
                    <Button btnType="button__success">Create</Button>
                </div>
            </form>;

        return(
            <div className={classes.newRecipe}>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.recipeViewer.loading,
        addRecipe: state.recipeViewer.addRecipe,
        addIngredient: state.recipeViewer.addIngredient,
        ingredientsIndex: state.recipeViewer.initialIngredients
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddRecipeCancel: () => dispatch(actions.addRecipeCancel()),
        onAddIngredient: () => dispatch(actions.addIngredient()),
        onSendForm: recipeData => dispatch(actions.sendRecipeForm(recipeData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(NewRecipe, axios));