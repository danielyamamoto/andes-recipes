import React from 'react';

import classes from './Logo.module.scss';

const logo = props => (
    <div className={classes.logo}>
        <img src={props.svgLogo} alt={props.svgText} />
    </div>
);

export default logo;