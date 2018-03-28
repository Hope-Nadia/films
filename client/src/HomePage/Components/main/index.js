import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import LogInContainer from '../../Containers/LogInContainer'
import SignUpForm from '../../Containers/SignUpContainer';
import  styles from './style';

const Home =(props) => {
    return (
    <React.Fragment>
        <Link to={'/filmList'}>Film list</Link>
        <Paper className={props.classes.main}>Film catalog autorization
        </Paper>
        <div className={props.classes.buttonContainer}>
        <Button variant='raised' onClick={props.sign}>SIGN UP</Button>
        <Button variant='raised' onClick={props.login}>LOG IN</Button>
        </div>
        <div  className={props.wantLogin ? props.classes.active :  props.classes.notActive}>
            <LogInContainer/>
        </div>
        <div className={props.wantSignUp ? props.classes.active :  props.classes.notActive}>
            <SignUpForm/>
        </div>

    </React.Fragment>
    )

};

export default withStyles(styles)(Home);
