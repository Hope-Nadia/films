import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import PropTypes from "prop-types";

import FilmBoxText from '../../Components/FilmBoxText/';
import  styles from './style';

const FilmBox = (props) => {
    return  (
        <Paper className={props.classes.main}>
           <FilmBoxText name={props.name} description={props.description} images={props.images}/>
        </Paper>
    );
};

FilmBox.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(FilmBox);