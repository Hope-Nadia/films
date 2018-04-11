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

const Form = (props)=> {
    return (
        <React.Fragment>
            <Typography variant='display3'>Add Film Form</Typography>
            <div className={props.classes.addError}>{props.error}</div>
            <form onSubmit={props.handleSubmit} className={props.classes.form}>
                <Field name="name"
                       type='text'
                       component={inputField}
                       label="Name"
                />
                <Field name="description"
                       type='text'
                       component={inputField}
                       label="Description"
                       multiline
                />
                <Field name="shortDescription"
                       type='text'
                       component={inputField}
                       label=" Short description"
                />
                <Field name="poster"
                       type='text'
                       component={inputField}
                       label="Poster URL"
                />
                <Field name="images"
                       type='text'
                       component={inputField}
                       label="Images URL"
                />
                <Button variant='raised' type="submit" className={props.classes.buttn}>Add new film </Button>
            </form>

        </React.Fragment>
    )
};

Form.propTypes = {
    classes: PropTypes.object
};

const ReduxForm = reduxForm({
    form: 'addFilm',
    validate
})(Form);

export default withStyles(styles)(ReduxForm);