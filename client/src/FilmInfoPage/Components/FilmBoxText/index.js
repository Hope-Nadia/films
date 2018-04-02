import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import  styles from './style';

const FilmBoxText = (props) => {
    return  (
        <div className={ props.classes.content}>
                <Typography className={props.classes.headline} variant="headline" component="h2">
                    {props.name}
                </Typography>
                <Typography component="p">
                    {props.description}
                </Typography>
        </div>
    );
};

FilmBoxText.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(FilmBoxText);