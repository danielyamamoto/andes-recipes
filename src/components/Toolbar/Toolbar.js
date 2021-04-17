import React from "react";

import classes from "./Toolbar.module.scss";
import svgAdd from "../../assets/img/add.svg";

import Logo from "../Logo/Logo";
import NavigationItems from "../Navigation/NavigationItems/NavigationItems";

const toolbar = props => (
    <header className={classes.toolbar}>
        <div className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
            <div className={classes.addLogo}>
                <Logo svgLogo={svgAdd} svgText="SVG-Add agrega nueva receta" />
            </div>
            <p>ADD RECIPE</p>
        </div>
        <nav className={[classes.flexContainer, classes.flexContainer__justifyBetween, classes.flexContainer__itemsCenter].join(' ')}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;