import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import  PropTypes  from 'prop-types';

import inputField from '../InputField/';
import  styles from './style';

const validate = values => {
    const errors = {};
    if(!values.name) errors.name='Required';
    if(!values.description) errors.description='Required';
    else{
        if(values.description.length < 60)   errors.description='Required more detailed description';
    };
    if(!values.shortDescription) errors.shortDescription='Required';
    if(values.poster && !(/^https?:\/\/.+\.(?:jpg|gif|png)$/gmi.test(values.poster))) errors.poster='Not right url';
    return errors;
};

const Form =(props)=>{
        return (
            <React.Fragment>
                <Typography variant='display3'>Edit Film Form</Typography>
                <div className={props.classes.editError}>{props.error}</div>
                <form onSubmit={props.handleSubmit} className={props.classes.form}>
                    <Field name="filmName"
                           type='text'
                           component={inputField}
                           label="Name"
                    />
                    <Field name="shortDescription"
                           type='text'
                           component={inputField}
                           label="Short Description"
                           multiline
                    />
                    <Field name="description"
                           type='text'
                           component={inputField}
                           label="Description"
                    />
                    <Field name="poster"
                           type='text'
                           component={inputField}
                           label="Poster URL"
                    />
                    <Button variant='raised' type="submit" className={props.classes.buttn}>Edit this film </Button>
                </form>
            </React.Fragment>
        )
};

Form.propTypes = {
    classes: PropTypes.object
};

const ReduxForm = reduxForm({
    form: 'editFilm',
    validate
})(Form);

export default withStyles(styles)(ReduxForm);