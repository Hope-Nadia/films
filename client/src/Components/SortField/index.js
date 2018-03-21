import React from 'react';
import { withStyles } from 'material-ui/styles';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';

import styles from "./style";

const SortField = (props)=>{
    return(
        <div>
        <InputLabel className={props.classes.field}>Sort by: </InputLabel>
            <Select
                value={props.value}
                onChange={props.handleSort}
                input={<Input name="sort"/>}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value='name'>name</MenuItem>
                <MenuItem value='mark'>mark</MenuItem>
            </Select>
        </div>
    )
};

export default  withStyles(styles)(SortField);