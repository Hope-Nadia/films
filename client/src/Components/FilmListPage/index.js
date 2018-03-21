import React from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';

import FilmListContainer from '../../Containers/FilmListContainer/';
import SearchFieldContainer from '../../Containers/SearchFieldContainer/';
import SortContainer from '../../Containers/SortContainer';

import styles from "./style";

const FilmListPage = (props)=> {
    return (
        <div className={props.classes.main}>
            <Paper className={props.classes.header}>Film List</Paper>
            <div className={props.classes.functions}>
            <SearchFieldContainer/>
            <SortContainer/>
            </div>
            <FilmListContainer/>
        </div>
    )
};
export default withStyles(styles)( FilmListPage);