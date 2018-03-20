import React from 'react';
import Card, { CardContent, CardTitle} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import  styles from './style';

const FilmBox = (props) => {
    return  (

            <Card className={props.classes.main}>
                <CardContent>
                    <Typography variant="headline" component="h2">
                        {props.name}
                    </Typography>
                    <Typography component="p">
                        {props.description}
                    </Typography>
                </CardContent>
            </Card>
);
};
export default withStyles(styles)(FilmBox);