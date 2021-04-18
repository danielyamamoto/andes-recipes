import React from 'react';

import classes from './BGImages.module.scss';

import img1X from '../../../assets/img/photo1x.png';
import img2X from '../../../assets/img/photo2x.png';
import img3X from '../../../assets/img/photo3x.png';

const bgImages = props => (
    <div className={classes.bgImages}>
        <img 
            srcSet={`${img1X} 1985w, ${img2X} 3970w, ${img3X} 5955w`} 
            sizes={"(max-width: 1985px) 100vw, (max-width: 3970px) 100vw, (max-width: 5955px) 100vw, 100vw"} 
            alt="Principal_photo" 
            src={img1X} 
        />
    </div>
);

export default bgImages;