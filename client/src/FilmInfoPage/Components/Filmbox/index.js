import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import Typography from 'material-ui/Typography';
import PropTypes from "prop-types";

import Card, { CardContent } from 'material-ui/Card';

import FilmBoxText from '../FilmBoxText/';
import Gallery from '../Gallery/';
import CommentBox from '../../Containers/commentBox';
import  styles from './style';

const FilmBox = (props) => {
    return  (
        <Card className={props.classes.main}>
            <FilmBoxText name={props.name} description={props.description}/>
            <Typography variant="headline" component="h2">Gallery</Typography>
            <Gallery images = {props.images}/>
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