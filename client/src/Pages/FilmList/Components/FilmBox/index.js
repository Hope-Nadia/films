import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import PropTypes from "prop-types";

import  styles from './style';

const FilmBox = (props) => {
    return  (

            <Card className={props.classes.main}>
                <div className={props.classes.media}>
                <img src={props.poster} className={props.classes.image}/>
                </div>
                <CardContent className={props.classes.content}>
                    <Typography className={props.classes.headline} variant="headline" component="h2">
                        {props.name}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                    <Button onClick={props.moreInfoClick} id={props.idFilm} name={props.name} className={props.classes.more}>More</Button>
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