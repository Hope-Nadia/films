import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import { getCurrentFilm } from "../Selectors";
import {getFilmInfo} from '../services/';
import FilmBox from '../../FilmInfo/Components/Filmbox/';
import {getAdmin} from "../../../Admin/Selectors";

class FilmMainBox extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        getFilmInfo(parseInt(this.props.match.params.id)).
    then(res=> {
            this.props.actions.watchFilm({
                idFilm: res.id,
                name: res.nameFilm,
                description: res.description,
            });
        })
            .catch(err => console.log(err));
    }

    render() {
        let props = {
            name: this.props.currentFilm.name,
            description: this.props.currentFilm.description,
            admin: this.props.admin
        };
        return (
          <FilmBox {...props}/>
        );
    }
}

FilmMainBox.propTypes = {
    currentFilm: PropTypes.object.isRequired,
    admin: PropTypes.bool,
    actions: PropTypes.shape({
        watchFilm: PropTypes.func.isRequired,
    })
};

const mapStateToProps = (state) => {
    return {
        currentFilm: getCurrentFilm(state),
        admin: getAdmin(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilmMainBox));