import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import Comments from '../Components/CommentBox/'
import * as actionCreators from "../Actions/";
import { getCurrentFilm, getComments } from "../Selectors";
import {getUser} from "../../onAllPages/Selectors";
import {getFilmComments} from '../services/';

class CommentBox extends Component {

    constructor(props) {
        super(props);
        console.log('comments props', props);
    }

    componentWillMount() {
        getFilmComments(this.props.match.params.id).
            then(res => {
                console.log('response',res);
                this.props.actions.loadComments(res.comments);
        })
            .catch(error => console.log(error));
    }

    render() {
        let props = {
            comments: this.props.comments
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
        getFilmComments: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => {
    console.log('comment box state',state);
    return {
        currentFilm: getCurrentFilm(state),
        currentUser: getUser(state),
        comments: getComments(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(CommentBox));