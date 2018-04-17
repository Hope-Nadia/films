import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';

import styles from './style';

const inputField = ({
                         input,
                         label,
                         type,
                         val,
                         meta:{ error, submitFailed},
                         classes
                     }) => (
    <React.Fragment>
        <TextField {...input}  type={type} label={label} className={classes.field} multiline/>
        {submitFailed && ((error && <Paper className={classes.error}>{error}</Paper>))}
    </React.Fragment>
);
export default withStyles(styles)(inputField);