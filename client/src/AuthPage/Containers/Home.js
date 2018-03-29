import React from 'react';
import { connect } from 'react-redux';
import Home from '../Components/main/';
import { bindActionCreators} from 'redux';

import * as actionCreators from "../Actions/";

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            login: true,
            signup: false
        };
        this.signUp = this.signUp.bind(this);
        this.logIn= this.logIn.bind(this);
    }

    signUp () {
        this.setState({
            login: false,
            signup: true
        })
    }
    logIn () {
        this.setState({
            login: true,
            signup: false
        })
    }
    render (){
        let props = {
            sign: this.signUp,
            login: this.logIn,
            logout: this.props.actions.logOut,
            wantLogin: this.state.login,
            wantSignUp: this.state.signup
        };
        return (
            <Home {...props}/>
        );
    }
}
const mapStateToProps = (state) => {
    return(    {

    });

};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer);