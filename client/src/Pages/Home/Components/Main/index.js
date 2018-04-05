import React from 'react';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import  styles from './style';

const Home =(props) => {
    return (
        <div className={props.classes.linkContainer}>
            <Link to={'/logIn'} className={props.classes.link}>LOGIN FORM</Link>
            <Link to={'/signUp'} className={props.classes.link}>SIGNUP FORM</Link>
        </div>
    )

};

export default withRouter(withStyles(styles)(Home));
