import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import PropTypes from "prop-types";

import  styles from './style';
import DeleteComment from '../../../../Admin/Containers/deleteComment';

class CommentList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            update: true
        }
    }
    render () {
        let key = 0;
        let reverseList = [];
        for( let i = this.props.comments.length; i--; ){
            reverseList.push( this.props.comments[i] );
        };
        return  (
            <div className={ this.props.classes.content}>
                {reverseList.map(comment =>{
                        key++;
                        return (
                            <div className={this.props.classes.box} key={key}>
                            <div className={this.props.classes.comment} >
                                <Typography className={this.props.classes.headline} variant="headline" component="h2">
                                    {comment.email}
                                </Typography>
                                <Devider/>
                                <Typography component="p">
                                    {comment.text}
                                </Typography>
                            </div>
                            <DeleteComment email={comment.email} text={comment.text}/>
                            </div>
                        )
                    }
                )}

            </div>
        );
    }
};

CommentList.propTypes = {
    classes: PropTypes.object,
    comments: PropTypes.array
};

export default withStyles(styles)(CommentList);