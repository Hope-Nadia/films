import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";
import HOST_NAME from '../../../../host_name';

import  styles from './style';

const Slider = (props) => {
    return  (
        <div className={props.active ?  props.classes.root : props.classes.rootNotActive} >
            <img src={props.image} className={props.classes.image}/>
            <img src={`${HOST_NAME}/images/cancel.png`} alt="" className={props.classes.close} onClick={props.closePoster}/>
        </div>
    );
};

Slider.propTypes = {
    classes: PropTypes.object,
    image: PropTypes.string,
    active: PropTypes.bool.isRequired,
    closePoster: PropTypes.func.isRequired
};

export default withStyles(styles)(Slider);