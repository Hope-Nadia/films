import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import {loadComments} from '../../Pages/FilmInfo/Actions/';
import DeleteCommentButton from '../Components/DeleteComment/';
import { getAdmin} from "../Selectors";
import {getComments} from '../../Pages/FilmInfo/Selectors/';

import {deleteOneComment} from '../services/';

class DeleteComment extends Component {

    constructor(props) {
        super(props);
        this.deleteComment=this.deleteComment.bind(this);
    }

    deleteComment(){
        if(window.confirm('Do you really want to delete this comment?')){
        deleteOneComment({
            email: this.props.email,
            text: this.props.text,
            id: parseInt(this.props.match.params.id)
        })
            .then( res=> {
                if(res.delete) {
                    let newComments = [];
                    for(let i in this.props.comments){
                        if(this.props.comments[i].email!==this.props.email && this.props.comments[i].text!==this.props.text )
                            newComments.push(this.props.comments[i]);
                    };
                    this.props.loadComments(newComments);
                }
            })
            . catch(err => console.log(err))
        }
    }

    render() {
        let props = {
            delete: this.deleteComment,
            admin: this.props.admin
        };
        return (
            <DeleteCommentButton {...props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        admin: getAdmin(state),
        comments: getComments(state),
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
        loadComments: bindActionCreators(loadComments,dispatch)
    }
};
DeleteComment.propTypes = {
    admin: PropTypes.bool,
    email : PropTypes.string,
    text: PropTypes.string,
    comments: PropTypes.array
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DeleteComment));