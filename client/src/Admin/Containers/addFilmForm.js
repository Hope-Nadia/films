import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import ReduxForm from '../Components/AddFilm/';

class AddFilmForm extends Component {

    constructor(props) {
        super(props);
        this.submit=this.submit.bind(this);
    }
    submit(values) {
          console.log('add', values);
    }

    render() {
        let props = {
            onSubmit: this.submit,
        };
        return (
          <ReduxForm {...props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch)
    }
};

AddFilmForm.propTypes = {

};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddFilmForm));