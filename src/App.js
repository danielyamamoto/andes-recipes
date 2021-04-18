import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import RecipeViewer from './containers/RecipeViewer/RecipeViewer';

class App extends Component {    
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={RecipeViewer} />
                <Redirect to="/" />
            </Switch>
        );

        return (
            <div>
                <Layout>
                    {routes}
                </Layout>
            </div>
        );
    }
}

export default withRouter(App);