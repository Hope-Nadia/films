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
    if(!values.poster) errors.poster='Required';
    return errors;

};

const Form = (props)=> {
    return (
        <React.Fragment>
            <Typography variant='display3'>Add Film Form</Typography>
            <div className={props.classes.loginError}>{props.error}</div>
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
                <Button variant='raised' type="submit" className={props.classes.buttn}>Add new film </Button>
            </form>

        </React.Fragment>
    )
};

Form.propTypes = {

};

const ReduxForm = reduxForm({
    form: 'addFilm',
    validate
})(Form);

export default withStyles(styles)(ReduxForm);

{/*<React.Fragment>*/}
    {/*<div>*/}
        {/*Add film Form*/}
    {/*</div>*/}
    {/*<form noValidate className={props.classes.form}>*/}
        {/*<TextField*/}
            {/*id="name"*/}
            {/*label="Name"*/}
            {/*className={props.classes.field}*/}
            {/*value={props.name}*/}
            {/*onChange={props.handleField('name')}*/}
        {/*/>*/}
        {/*<TextField*/}
            {/*id="description"*/}
            {/*label="Description"*/}
            {/*className={props.classes.field}*/}
            {/*value={props.description}*/}
            {/*onChange={props.handleField('description')}*/}
            {/*multiline*/}
        {/*/>*/}
        {/*<TextField*/}
            {/*id="shortDescription"*/}
            {/*label="Short description"*/}
            {/*className={props.classes.field}*/}
            {/*value={props.shortDescription}*/}
            {/*onChange={props.handleField('shortDescription')}*/}
            {/*multiline*/}
        {/*/>*/}
        {/*<TextField*/}
            {/*id="poster"*/}
            {/*label='Poster URL'*/}
            {/*className={props.classes.field}*/}
            {/*value={props.poster}*/}
            {/*onChange={props.handleField('poster')}*/}
        {/*/>*/}
        {/*<Button onClick={props.addFilm}>Add new film</Button>*/}
    {/*</form>*/}
{/*</React.Fragment>*/}