import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import { getCurrentFilm, getMark, getMarkError } from "../Selectors";
import {getUser, getAuthenticated } from "../../../Main/Selectors";
import { getFilmMark, sendMark } from '../services/';
import StarRating from '../Components/StartRating/';

class Rating extends Component {

    constructor(props) {
        super(props);
        this.setMark=this.setMark.bind(this);
        this.loadAverageMark = this.loadAverageMark.bind(this);
    }
    componentWillMount() {

       this.loadAverageMark();

    }

    loadAverageMark() {
        getFilmMark(this.props.match.params.id)
            .then(res=> {
                if(res.mark)this.props.actions.loadMark(parseFloat(res.mark));
                if(!this.props.authenticated) this.props.actions.markError('Please,log in to send rate.');
            })
            .catch(error => console.log(error));
    }

    setMark(rate) {
        if(this.props.authenticated){
            sendMark({
                email: this.props.currentUser.email,
                idFilm: this.props.currentFilm.id,
                mark: rate
            })
                .then(response => {
                    if(response.mark==='not'){
                        this.props.actions.loadMark(this.props.mark);
                        this.props.actions.markError('You can\'t rate again! Change user?');
                    }
                    else this.loadAverageMark();
                })
                .catch(error => console.log(error))
        }
    }

    render() {
        let props = {
            auth: this.props.authenticated,
            initialMark: this.props.mark,
            sendMark: this.setMark,
            markError: this.props.markError
        };
        return (
            <StarRating {...props}/>
        );
    }
}

Rating.propTypes = {
    currentFilm: PropTypes.object,
    currentUser: PropTypes.object,
    mark: PropTypes.number,
    authenticated: PropTypes.bool,
    markError: PropTypes.string,
    actions: PropTypes.shape({
        loadMark: PropTypes.func.isRequired,
        markError: PropTypes.func.isRequired,
        sendMark: PropTypes.func.isRequired,
    })
};

const mapStateToProps = (state) => {
    return {
        currentFilm: getCurrentFilm(state),
        currentUser: getUser(state),
        authenticated: getAuthenticated(state),
        mark: getMark(state),
        markError: getMarkError(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Rating));