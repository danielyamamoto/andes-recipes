import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

import classes from './NavigationItems.module.scss';
import svgLogo from '../../../assets/img/logo.svg';
import svgAdd from '../../../assets/img/add.svg';

const navigationItems = props => (
    <ul className={[classes.navigationItems, classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
        <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
            <div className={classes.addLogo}>
                <Logo svgLogo={svgAdd} svgText="SVG-Add agrega nueva receta" />
            </div>
            <NavigationItem link="/" exact>ADD RECIPE</NavigationItem>
        </div>
        
        <div>
            <NavigationItem link="/" exact><Logo svgLogo={svgLogo} svgText="SVG-Logo principal" /></NavigationItem>
        </div>
    </ul>
);

export default navigationItems;