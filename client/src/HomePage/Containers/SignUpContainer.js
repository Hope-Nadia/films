import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';

import ReduxForm from '../Components/SignUpForm/';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }


    submit (values) {
        console.log(JSON.stringify(values));
    }

    render() {

        return (
            <ReduxForm onSubmit={this.submit} email={this.props.email} password={this.props.password}/>
        )
    }
}

Form.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};

const  mapStateToProps = (state)=> {
// let values = {...{email: '', password: ''},...getFormValues('login')(state)};
    let data = { user : getFormValues('signUp')(state) };
    return {
        email: data.user && data.user.email || '',
        password:  data.user && data.user.password || '',
    };
};

const SignUpForm = connect(mapStateToProps)(Form);

export default SignUpForm;

