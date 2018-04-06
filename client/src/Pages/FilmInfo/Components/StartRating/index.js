import HOST_NAME from '../../../../host_name';
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import Rating from 'react-rating';

import  styles from './style';

const StarRating = (props) => {
    return  (
        <div className={props.classes.root}>
            <Typography className={props.classes.headline}>MDB rating: {props.initialMark}</Typography>
            <Typography className={props.markError==='' ? props.classes.errorNotActive : props.classes.errorActive }>
                {props.markError}
                <Link to={'/logIn'} className={props.classes.link}><img src={`${HOST_NAME}/images/login.png`} className={props.classes.arrow}/></Link>
            </Typography>
            <Rating stop={10}
                    initialRating={props.initialMark}
                    onChange={props.sendMark}
                    emptySymbol={<img  src={`${HOST_NAME}/images/starS.png`} className={props.classes.star}/>}
                    fullSymbol={<img src={`${HOST_NAME}/images/starG.png`} className={props.classes.star}/>}
                    readonly={!(props.markError ==='')}
            />
        </div>

    );
};

StarRating.propTypes = {
    classes: PropTypes.object,
    initialMark: PropTypes.number,
    markError: PropTypes.string,
    sendMark: PropTypes.func.isRequired,


};

export default withStyles(styles)(StarRating);