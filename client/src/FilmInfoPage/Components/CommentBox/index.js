import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from "prop-types";

import  styles from './style';
import CommentList from '../CommentList/';

const Comments = (props) => {
    return  (
        <div className={ props.classes.content}>
            <TextField
                id="multiline-flexible"
                label="Write your comment"
                multiline
                rowsMax="5"
                value={props.currentComment}
                onChange={props.writeComment}
                className={props.classes.comment}
            />
            <Button className={props.auth ? props.classes.button : props.classes.disableButton}
                    onClick={props.leftComment}
                    disabled={!props.auth}>{
                props.auth ? 'Left comment' : 'Please, log in to left a comment.'
            }</Button>
            <Devider className={props.classes.devider}/>
            <CommentList comments={props.comments}/>
        </div>
    );
};

Comments.propTypes = {
    classes: PropTypes.object,
    comments: PropTypes.array
};

export default withStyles(styles)(Comments);