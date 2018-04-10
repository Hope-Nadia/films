import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import {loginAdmin} from "../../Admin/Actions";
import Navigation from '../Components/Navigation/'
import { getUser } from '../Selectors/';
import {existedUser} from '../services/';

class Navigate extends React.Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    componentWillMount() {
        let logedUser =JSON.parse( localStorage.getItem('user'));
        if(logedUser){
            existedUser({
                id:  logedUser.idUser,
                email: logedUser.email
        })
                .then(res=> {
                    if(res.user[0]) {
                        this.props.actions.setExistUser(logedUser);
                        if(logedUser.email==='admin@admin.dmn') this.props.loginAdmin();
                    } else this.logOut();
                })
                .catch(error => console.log(error))
        };
    }
    logOut() {
        localStorage.removeItem('user');
        this.props.actions.logOut();
        this.props.history.push('/');
    }
    render (){
        return (
            <Navigation email={this.props.user.email} logout={this.logOut}/>
        );
    }
};

Navigate.propTypes = {
    user: PropTypes.object,
};

const mapStateToProps = (state) => {
    return({
        user: getUser(state)
    });

};
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
        loginAdmin: bindActionCreators(loginAdmin,dispatch)
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigate));