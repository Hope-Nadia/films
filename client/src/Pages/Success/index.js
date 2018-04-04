import React from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import {getUser} from '../../Main/Selectors/index';
import  styles from './style';

const Success = (props)=>  {

        return (
            <Paper className={props.classes.main}>Hello, {props.user.email}. </Paper>
        );

};

Success.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => {
    return(    {
        user: getUser(state)
    });

};


export default withStyles(styles)(connect(mapStateToProps)( Success));