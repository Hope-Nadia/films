import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import {Link} from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import  styles from './style';

const Navigation = (props)=> {
    return (
        <AppBar className={props.classes.appBar}>
            <Toolbar className={props.classes.main}>
                <Typography variant="title" color="inherit">
                    {props.email ?  props.email : 'You are not login user!' }
                </Typography>
                <Typography variant="subheading" color="inherit">
                    <Link to={'/filmList'} className={props.classes.link}>Go to film list</Link>
                </Typography>
                <Typography variant="subheading" color="inherit">
                    <Link to={'/'} className={props.classes.link}>Go to home page</Link>
                </Typography>
                <Button onClick={props.logout} color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );

};

Navigation.propTypes = {
    email: PropTypes.string,
    logout: PropTypes.func.isRequired
};

export default withStyles(styles)(Navigation);
