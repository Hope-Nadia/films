import React from 'react';
import { connect } from 'react-redux';
import { getFormValues, stopSubmit } from 'redux-form';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import { login } from '../../LogIn/Actions/';
import ReduxForm from '../Components/SignUpForm/';
import { trySignUp }  from '../services/';
import {  getSignupError, getDisableButtons } from '../Selectors/';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit (values) {
        this.props.actions.disableButtons();
        trySignUp(values).
            then(res => {
                if(!res.error) {
                    this.props.login(res);
                    localStorage.setItem('user',JSON.stringify(res));
                    this.props.history.push('/success');
                }
                else{
                    this.props.stopSubmit('signUp',{_error: res.error});
                }
                this.props.actions.enableButtons();
        })
            .catch(error => console.log(error));
    }

    render() {
        let props = {
            onSubmit: this.submit,
            email: this.props.email,
            password: this.props.password,
            disableButton: this.props.disableButtons
        };
        return (
            <ReduxForm {...props}/>
        )
    }
}

const  mapStateToProps = (state)=> {
    let data = { user : getFormValues('signUp')(state) };
    return {
        email: data.user && data.user.email || '',
        password:  data.user && data.user.password || '',
        disableButtons: getDisableButtons(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
        login: bindActionCreators(login,dispatch),
        stopSubmit: bindActionCreators(stopSubmit,dispatch),
    }
};

Form.propTypes = {
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    disableButtons: PropTypes.bool.isRequired,
    stopSubmit: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
};

const SignUpForm = connect(mapStateToProps,mapDispatchToProps)(Form);

export default withRouter(SignUpForm);

