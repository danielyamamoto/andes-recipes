import React, { Fragment } from 'react';

import classes from './Spinner.module.scss';

const spinner = () => (
    <Fragment>
        <div className={classes.loader}>Loading...</div>
        <h1 className={classes}>LOADING</h1>
    </Fragment>
);

export default spinner;