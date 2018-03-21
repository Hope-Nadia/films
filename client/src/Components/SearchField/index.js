import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';

import styles from "./style";

const SearchField = (props)=>{
    return(
        <TextField   id="search"
                     className={props.classes.field}
                     label="Search field"
                     type='search'
                     value={ props.searchValue}
                     onChange={props.handleSearch} />
    )
};

export default  withStyles(styles)(SearchField);