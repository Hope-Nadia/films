import React from 'react';
import Card, { CardContent} from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import  styles from './style';

const NotFound = (props) => {
    return  (

        <React.Fragment >
            <Card className={props.classes.main}>
                <CardContent  className={props.classes.content}>404 <br/> PAGE NOT FOUND</CardContent>
            </Card>
        </React.Fragment>
    );
};

NotFound.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(NotFound);