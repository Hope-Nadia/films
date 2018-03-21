import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import  styles from './style';

const Home =(props) => {
    console.log('HOME PROPS', props);
    return (
    <React.Fragment>
        <Link to={'/filmList'}>Film list</Link>
        <Paper className={props.classes.main}>Film catalog autorization
            {JSON.stringify(props.filmList)}
        </Paper>
        {/*<button onClick={props.getFilm}>Get film</button>*/}
        {/*<button onClick={props.addFilm}>Add film</button>*/}
    </React.Fragment>
    )

};

export default withStyles(styles)(Home);
