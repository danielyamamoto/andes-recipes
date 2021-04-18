import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';

import * as actions from '../../store/actions/index';

class Recipe extends Component {
    componentDidMount() {
        this.props.onFetchRecipes();
    }

    render() {
        return(
            <div>
                {!this.props.loading ? <Spinner /> : null }
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        recipes: state.recipeViewer.recipes,
        loading: state.recipeViewer.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchRecipes: () => dispatch(actions.fetchRecipes())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);