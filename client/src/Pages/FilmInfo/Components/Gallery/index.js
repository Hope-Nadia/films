import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import  styles from './style';
import ImagePoster from '../../Containers/imagePoster';

const Gallery = (props) => {
    let images = props.images ? props.images : [];
    return  (
        <React.Fragment>
        <div className={props.classes.root}>
            {
                images.map(image => (
                            <img key={image} src={image} alt="" className={props.classes.image} onClick={props.imageClick}/>
                    )
                )
            }
        </div>
            <ImagePoster/>
        </React.Fragment>
    );
};


Gallery.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array.isRequired,
    imageClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Gallery);