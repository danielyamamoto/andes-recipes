import React from 'react';
import { connect } from 'react-redux';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

import classes from './NavigationItems.module.scss';
import svgLogo from '../../../assets/img/logo.svg';
import svgAdd from '../../../assets/img/add.svg';
import * as actions from '../../../store/actions/index';

const navigationItems = props => (
    <ul className={[classes.navigationItems, classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
        <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
            <div className={classes.addLogo}>
                <Logo svgLogo={svgAdd} svgText="SVG-Add agrega nueva receta" />
            </div>
            {/* <NavigationItem link="/" exact onClick={this.props.onAddRecipe}>ADD RECIPE</NavigationItem> */}
            <div onClick={props.onAddRecipeStart}>ADD RECIPE</div>
        </div>
        
        <div>
            <NavigationItem link="/" exact><Logo svgLogo={svgLogo} svgText="SVG-Logo principal" /></NavigationItem>
        </div>
    </ul>
);

const mapStateToProps = state => {
    return {
        addRecipe: state.recipeViewer.addRecipe
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddRecipeStart: () => dispatch(actions.addRecipeStart())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(navigationItems);