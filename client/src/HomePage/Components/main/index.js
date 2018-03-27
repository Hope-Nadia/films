import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import  styles from './style';

const Home =(props) => {
    return (
    <React.Fragment>
        <Link to={'/filmList'}>Film list</Link>
        <Paper className={props.classes.main}>Film catalog autorization
        </Paper>
    </React.Fragment>
    )

};

export default withStyles(styles)(Home);
