import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { stopSubmit, initialize, getFormInitialValues} from 'redux-form';
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import ReduxForm from '../Components/EditFilm/';
import {getFullFilmInfo, editFilm } from '../services/';

class EditFilmForm extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentWillMount(){

        getFullFilmInfo(this.props.match.params.id)
            .then(res => {
                this.props.initialize('editFilm',{
                    filmName: res.nameFilm,
                    description: res.description,
                    shortDescription: res.shortDescription,
                    poster: res.poster
                })
            })
            .catch(error => console.log(error))
    }

    submit(values) {
        let req = {};

        Object.keys(this.props.initialValues).forEach(i => {
            if(i==='poster' && values[i]==='' ) values[i]= 'http://localhost:3000/images/noimage.jpg';
            if(this.props.initialValues[i]!==values[i]) req[`${i}`]= values[i];
        });

        console.log('req',req);
        if(Object.keys(req).length===0) {
            this.props.stopSubmit('editFilm',{_error: 'Nothing changed!'});
        } else {
           req.id = parseInt(this.props.match.params.id);

            editFilm(req)
                .then(res=> {
                if(res.edit) this.props.history.push(`/filmList/film/${(values.filmName).replace(/\s/ig,'_')}/${this.props.match.params.id}`);
                else this.props.stopSubmit('editFilm',{_error: 'Something wrong with service.Please, wait and try again.'});
                })
                .catch(error => console.log(error))
        }
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
        initialValues: getFormInitialValues('editFilm')(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
       stopSubmit: bindActionCreators(stopSubmit,dispatch),
        initialize: bindActionCreators(initialize,dispatch)
    }
};

EditFilmForm.propTypes = {
    stopSubmit: PropTypes.func.isRequired,
    initialize: PropTypes.func.isRequired,
    initialValues: PropTypes.object
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(EditFilmForm));