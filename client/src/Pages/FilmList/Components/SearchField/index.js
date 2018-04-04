import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

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

SearchField.propTypes = {
    classes: PropTypes.object,
    searchValue: PropTypes.string.isRequired,
    handleSearch: PropTypes.func.isRequired
};

export default  withStyles(styles)(SearchField);