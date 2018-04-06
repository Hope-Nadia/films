import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import Navigation from '../Components/Navigation/'
import { getUser } from '../Selectors/';
import {existedUser} from '../services/';

class Navigate extends React.Component {
    constructor(props){
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    componentWillMount() {
        let logedUser = localStorage.getItem('user');
        if(logedUser){
            existedUser({
                id:  JSON.parse(logedUser).idUser,
                email: JSON.parse(logedUser).email
        })
                .then(res=> {
                    if(res.user[0]) {
                        this.props.actions.setExistUser(JSON.parse(logedUser));
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
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navigate));