import React, { Component, Fragment } from 'react';

import classes from './Layout.module.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    
    render() {
        return(
            <Fragment>
                <Toolbar />
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Fragment>
        );
    }
}

export default Layout;