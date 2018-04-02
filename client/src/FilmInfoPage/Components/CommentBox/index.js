import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import PropTypes from "prop-types";

import  styles from './style';
import CommentList from '../CommentList/';

const Comments = (props) => {
    console.log('coments',props);
    return  (
        <div className={ props.classes.content}>
            <CommentList comments={props.comments}/>
        </div>
    );
};

Comments.propTypes = {
    classes: PropTypes.object,
    comments: PropTypes.array
};

export default withStyles(styles)(Comments);