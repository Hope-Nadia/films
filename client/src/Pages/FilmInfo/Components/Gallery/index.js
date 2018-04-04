import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";
import GridList, { GridListTile } from 'material-ui/GridList';

import  styles from './style';

const Gallery = (props) => {
    let images = props.images ? props.images : [];
    return  (
        <div className={props.classes.root}>
            <GridList className={props.classes.gridList} cols={3}>
                {
                    images.map(image => (
                        <GridListTile className={props.classes.element} key={image}>
                            <img src={image} className={props.classes.image}/>
                        </GridListTile>
                        )
                    )
                }
            </GridList>
        </div>
    );
};

Gallery.propTypes = {
    classes: PropTypes.object,
    images: PropTypes.array
};

export default withStyles(styles)(Gallery);