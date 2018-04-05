import React from 'react';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import PropTypes from "prop-types";
import Card, { CardContent } from 'material-ui/Card';


import FilmBoxText from '../FilmBoxText/';
import GalleryBox from '../../Containers/gallery';
import CommentBox from '../../Containers/commentBox';
import Rating from '../../Containers/rating';

import  styles from './style';

const FilmBox = (props) => {
    return  (
        <Card className={props.classes.main}>
            <FilmBoxText name={props.name} description={props.description}/>
            <Devider className={props.classes.divider}/>
            <Typography variant="headline" component="h2" className={props.classes.gallery}>Gallery</Typography>
            <GalleryBox/>
            <Devider className={props.classes.divider}/>
            <Rating/>
            <Devider className={props.classes.divider}/>
            <CommentBox/>
        </Card>
    );
};

FilmBox.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
};

export default withStyles(styles)(FilmBox);