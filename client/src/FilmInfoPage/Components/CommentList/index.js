import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Devider from 'material-ui/Divider';
import PropTypes from "prop-types";

import  styles from './style';

const CommentList = (props) => {
    let key =0;
    return  (
        <div className={ props.classes.content}>

            {props.comments.map(comment =>{
                key++;
              return (
                  <div className={props.classes.comment} key={key}>
                      <Typography className={props.classes.headline} variant="headline" component="h2">
                          {comment.email}
                      </Typography>
                      <Devider/>
                      <Typography component="p">
                          {comment.text}
                      </Typography>
                  </div>
                     )
                }
            )}

        </div>
    );
};

CommentList.propTypes = {
    classes: PropTypes.object,
    comments: PropTypes.array
};

export default withStyles(styles)(CommentList);