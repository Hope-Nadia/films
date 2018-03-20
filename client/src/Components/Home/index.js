import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import  styles from './style';

const Home =(props) => {
    console.log('HOME PROPS', props);
    return (
    <React.Fragment>
        <Paper className={props.classes.main}>Film catalog
            {JSON.stringify(props.filmList)}
        </Paper>
        {/*<button onClick={props.getFilm}>Get film</button>*/}
        {/*<button onClick={props.addFilm}>Add film</button>*/}
    </React.Fragment>
    )

};

export default withStyles(styles)(Home);
