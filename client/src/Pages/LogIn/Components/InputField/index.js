import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import styles from './style';

const inputField = ({
                         input,
                         label,
                         type,
                         meta:{ error, submitFailed},
                         classes
                     }) => (
    <React.Fragment>
        <TextField {...input} placeholder={label} type={type}/>
        {submitFailed && ((error && <Paper className={classes.error}>{error}</Paper>))}
    </React.Fragment>
);
export default withStyles(styles)(inputField);