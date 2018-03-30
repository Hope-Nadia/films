import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

import LogInContainer from '../../Containers/LogInContainer'
import SignUpForm from '../../Containers/SignUpContainer';
import  styles from './style';
import Navigate from '../../../onAllPages/Containers/navigation'

const Home =(props) => {
    return (
    <React.Fragment>
        <div className={props.classes.buttonContainer}>
        <Button onClick={props.sign}
                className={props.wantSignUp ? props.classes.activeBut :  props.classes.notActiveBut}>SIGN UP FORM</Button>
        <Button onClick={props.login}
                className={props.wantLogin ? props.classes.activeBut :  props.classes.notActiveBut} >LOG IN FORM</Button>
        </div>

        <div  className={props.wantLogin ? props.classes.activeForm :  props.classes.notActiveForm}>
            <LogInContainer/>
        </div>
        <div className={props.wantSignUp ? props.classes.activeForm :  props.classes.notActiveForm}>
            <SignUpForm/>
        </div>

    </React.Fragment>
    )

};

export default withStyles(styles)(Home);
