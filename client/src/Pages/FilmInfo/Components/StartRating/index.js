import React from 'react';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import Typography from 'material-ui/Typography';
import Card, { CardContent } from 'material-ui/Card';
import PropTypes from "prop-types";
import Rating from 'react-rating';

import  styles from './style';

const StarRating = (props) => {
    console.log('rating props', props);
    return  (
        <div className={props.classes.root}>
            <Typography className={props.classes.headline}>MDB rating: {props.initialMark}</Typography>
            <Typography className={props.classes.error}>{props.markError}</Typography>
            <Rating stop={10}
                    initialRating={props.initialMark}
                    onChange={props.sendMark}
                    emptySymbol={<img src="http://localhost:3000/images/star.png" className={props.classes.star}/>}
                    fullSymbol={<img src="http://localhost:3000/images/star1.png" className={props.classes.star}/>}
            />
        </div>

    );
};

StarRating.propTypes = {
    classes: PropTypes.object,
    name: PropTypes.string,
    description: PropTypes.string,
    images: PropTypes.array
};

export default withStyles(styles)(StarRating);