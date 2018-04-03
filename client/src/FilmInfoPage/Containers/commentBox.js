import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import Comments from '../Components/CommentBox/'
import * as actionCreators from "../Actions/";
import { getCurrentFilm, getComments, getCurrentComment } from "../Selectors";
import {getUser, getAuthenticated} from "../../onAllPages/Selectors";
import {getFilmComments, sendComment} from '../services/';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        this.leftComment=this.leftComment.bind(this);
        this.handleCurrentComment=this.handleCurrentComment.bind(this);
    }

    componentWillMount() {
        getFilmComments(this.props.match.params.id).
            then(res => {
                this.props.actions.loadComments(res.comments);
            this.props.actions.resetComment();
        })
            .catch(error => console.log(error));
    }
    leftComment() {
        if(this.props.currentComment!==''){
            sendComment({
                comment: this.props.currentComment,
                idUser: JSON.parse(localStorage.getItem('user')).idUser,
                idFilm: this.props.currentFilm.id
            })
                . then(res => {
                    this.props.comments.push({'text': this.props.currentComment,'email':JSON.parse(localStorage.getItem('user')).email})
                    this.props.actions.resetComment();
                })
                .catch(error => console.log(error));
        }
    }
    handleCurrentComment(e) {
        this.props.actions.writeComment(e.target.value);
    }
    render() {
        let props = {
            comments: this.props.comments,
            leftComment: this.leftComment,
            writeComment: this.handleCurrentComment,
            currentComment: this.props.currentComment,
            auth: this.props.authenticated
        };
        return (
       <Comments {...props}/>
        );
    }
}

CommentBox.propTypes = {
    currentFilm: PropTypes.object,
    currentUser: PropTypes.object,
    comments: PropTypes.array,
    actions: PropTypes.shape({
        getFilmComments: PropTypes.func
    })
};

const mapStateToProps = (state) => {
    return {
        currentFilm: getCurrentFilm(state),
        currentUser: getUser(state),
        comments: getComments(state),
        currentComment: getCurrentComment(state),
        authenticated: getAuthenticated(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentBox));