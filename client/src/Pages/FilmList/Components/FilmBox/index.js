import React from 'react';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import PropTypes from "prop-types";
import HOST_NAME from "../../../../host_name";

import DeleteFilmButton from '../../../../Admin/Containers/deleteFilmButton';
import  styles from './style';

const FilmBox = (props) => {
    return  (

            <Card className={props.classes.main}>
                <div className={props.classes.media}>
                <img src={props.poster} className={props.classes.image}/>
                </div>
                <CardContent className={props.classes.content}>
                    <div className={props.classes.headContainer}>
                    <Typography variant="headline" component="h2">
                        {props.name}
                    </Typography>
                    <Typography className={props.classes.rating} variant="headline" component="h2">
                        Rating : {props.mark}
                    </Typography>
                    </div>
                    <Typography className={props.classes.text} component="p">
                        {props.description}
                    </Typography>
                    <Button onClick={props.moreInfoClick} id={props.idFilm} name={props.name} className={props.classes.more}>More</Button>
                </CardContent>
                <DeleteFilmButton idFilm={props.idFilm} name={props.name}/>
                <div onClick={props.editClick}
                        id={props.idFilm}
                        className={props.admin ? props.classes.activeLink : props.classes.notActiveLink}>
                    <img src={`${HOST_NAME}/images/edit.png`} className={props.classes.icon}/>
                </div>
            </Card>
);
};

FilmBox.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    moreInfoClick: PropTypes.func.isRequired,
    mark: PropTypes.number
};

export default withStyles(styles)(FilmBox);