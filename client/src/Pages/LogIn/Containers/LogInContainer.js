import React from 'react';
import { connect } from 'react-redux';
import {getFormValues, stopSubmit} from 'redux-form';
import PropTypes from 'prop-types';
import { bindActionCreators} from 'redux';
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/index";
import ReduxForm from '../Components/LogInForm/index';
import { tryLogIn } from '../services/index';
import {getDisableButtons, getLoginError} from '../Selectors/index';

class Form extends React.Component{

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit (values) {
        this.props.actions.disableButtons();
        tryLogIn(values).
            then(res => {
                if(!res.hasOwnProperty('error')){
                    this.props.actions.login(res);
                    this.props.history.push('/success');
                    localStorage.setItem('user',JSON.stringify(res));
                }else {
                    // console.log(this.props);
                   // stopSubmit('login',{error: res.error});
                    // throw new SubmissionError(res.error);
                    // console.log('err',res.error);
                    this.props.actions.loginFail(res.error);
                };
            this.props.actions.enableButtons();
        })
            .catch(err => console.log(err));
    }

    render() {
        let props = {
            onSubmit: this.submit,
            loginError: this.props.loginError,
            disableButton: this.props.disableButtons
        };
        return (
                <ReduxForm {...props}/>
        )
    }
}

Form.propTypes = {
    emailFieldValue: PropTypes.string.isRequired,
    passwordFieldValue: PropTypes.string.isRequired,
    loginError: PropTypes.string,
    disableButtons: PropTypes.bool.isRequired,
};

const  mapStateToProps = (state)=> {
    let data = { user : getFormValues('login')(state) };
    return {
        emailFieldValue: data.user && data.user.email || '',
        passwordFieldValue:  data.user && data.user.password || '',
        loginError: getLoginError(state),
        disableButtons: getDisableButtons(state)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

const LogInForm = connect(mapStateToProps, mapDispatchToProps)(Form);
// const  LogInForm = reduxForm({
//     form: 'login'
// })(connect(mapStateToProps, mapDispatchToProps)(Form));

export default withRouter(LogInForm);

