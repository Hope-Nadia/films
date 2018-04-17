import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from "prop-types";

import styles from "./style";
import HOST_NAME from "../../../host_name";

const DeleteButton = (props)=>{
    return(
        <div className={props.admin ? props.classes.crossActive : props.classes.crossNotActive} onClick={props.delete}>
            <img src={`${HOST_NAME}/images/delete.png`} alt='' className={props.classes.image}/>
        </div>
    )
};

DeleteButton.propTypes = {
    classes: PropTypes.object,
    delete: PropTypes.func.isRequired,
    admin: PropTypes.bool.isRequired
};

export default  withStyles(styles)(DeleteButton);