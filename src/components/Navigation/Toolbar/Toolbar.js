import React from "react";

import classes from "./Toolbar.module.scss";

import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => (
    <header className={classes.toolbar}>
        <nav>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;