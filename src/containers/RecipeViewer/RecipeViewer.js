import React, { Component} from 'react';

import BGImages from '../../components/UI/BGImages/BGImages';

import classes from './RecipeViewer.module.scss';

class RecipeViewer extends Component {

    render() {
        return(
            <div className={[classes.reciperViewer, classes.flexContainer].join(' ')}>
                <div>
                    HOLA
                </div>
                <BGImages />
            </div>
        );
    }
}

export default RecipeViewer;