import React from 'react';
import Card, { CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import  styles from './style';

const FilmBox = (props) => {
    return  (

            <Card className={props.classes.main}>
                <img src={props.poster} className={props.classes.media}/>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.name}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
);
};

FilmBox.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    classes: PropTypes.object,
};

export default withStyles(styles)(FilmBox);