import React from 'react';
import { withStyles } from 'material-ui/styles';
import {Link} from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import FilmListContainer from '../../Containers/FilmListContainer';
import SearchFieldContainer from '../../Containers/SearchFieldContainer';
import SortContainer from '../../Containers/SortContainer';

import styles from "./style";
import {getAdmin} from "../../../../Admin/Selectors";
import HOST_NAME from "../../../../host_name";

const FilmListPage = (props)=> {
    return (
        <div className={props.classes.main}>
            <Paper className={props.classes.header}>Film List</Paper>
            <div className={props.classes.functions}>
            <SearchFieldContainer/>
            <SortContainer/>
            <Link to={'/addFilmForm'} className={props.admin ? props.classes.activeLink : props.classes.notActiveLink}>
                <img src={`${HOST_NAME}/images/addFilm.png`} className={props.classes.image}/>
            </Link>
            </div>
            <FilmListContainer/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        admin: getAdmin(state)
    }
};
FilmListPage.propTypes = {
    admin: PropTypes.bool
};

export default withStyles(styles)(connect(mapStateToProps)( FilmListPage));