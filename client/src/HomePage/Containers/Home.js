import React from 'react';
import { connect } from 'react-redux';
import Home from '../Components/main/';

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
        console.log('Sign up');
        this.setState({
            login: false,
            signup: true
        })
    }
    logIn () {
        console.log('Log in');
        this.setState({
            login: true,
            signup: false
        })
    }
    render (){
        let props = {
            sign: this.signUp,
            login: this.logIn,
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

export default connect(mapStateToProps)(HomeContainer);