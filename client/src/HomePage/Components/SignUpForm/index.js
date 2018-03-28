import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Card from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import  PropTypes  from 'prop-types';

import inputField from '../InputField/';
import  styles from './style';

const validate = values => {
    const errors = {};

    if(!values.email) {
        errors.email = 'Required';
    } else {
        if (!(/^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm
                .test(values.email))) {
            errors.email = 'Not right email';
        }
    }
    if(!values.password) {
        errors.password = 'Required';
    } else {
        if (values.password && values.password.length<6) {
            errors.password = 'Too short password';
        }
    }
    return errors;

};


const Form = (props)=> {
    const { handleSubmit} = props;
    return (
        <React.Fragment>
        <form onSubmit={handleSubmit} className={props.classes.form}>

            <Field name="email"
                   type='text'
                   component={inputField}
                   label="Email"
                   />
            <Field name="password"
                   type='text'
                   component={inputField}
                   label="Password"
            />
            <Button variant='raised' type="submit" className={props.classes.buttn}>Sign Up</Button>
        </form>

        </React.Fragment>
    )
};

Form.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
};

const ReduxForm = reduxForm({
    form: 'signUp',
    validate
})(Form);

export default withStyles(styles)(ReduxForm);