import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';


import * as actionCreators from "../Action/";
import ReduxForm from '../Components/LogInForm/';
import { tryLogIn } from '../services/';
import {getLoginError} from '../Selectors/';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit (values) {
        tryLogIn(values).
            then(res => {
                if(res.hasOwnProperty('idUser')){
                    this.props.actions.login(res);
                }else {
                    console.log(res.error);
                    this.props.actions.loginFail(res.error);
                }
        })
            .catch(err => console.log(err));
    }

    render() {

        return (
                <ReduxForm onSubmit={this.submit} loginError={this.props.loginError} email={this.props.emailFieldValue} password={this.props.passwordFieldValue}/>

        )
    }
}

Form.propTypes = {
    emailFieldValue: PropTypes.string.isRequired,
    passwordFieldValue: PropTypes.string.isRequired,
};

const  mapStateToProps = (state)=> {
    let data = { user : getFormValues('login')(state) };
    return {
        emailFieldValue: data.user && data.user.email || '',
        passwordFieldValue:  data.user && data.user.password || '',
        loginError: getLoginError(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

const LogInForm = connect(mapStateToProps, mapDispatchToProps)(Form);

export default LogInForm;

