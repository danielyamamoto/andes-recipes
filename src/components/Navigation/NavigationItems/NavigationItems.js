import React from 'react';

import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

import classes from './NavigationItems.module.scss';
import svgLogo from '../../../assets/img/logo.svg';
import svgAdd from '../../../assets/img/add.svg';


const navigationItems = props => (
    <ul className={classes.navigationItems}>
        <NavigationItem link="/" exact><Logo svgLogo={svgLogo} svgText="SVG-Logo principal" /></NavigationItem>
    </ul>
);

export default navigationItems;