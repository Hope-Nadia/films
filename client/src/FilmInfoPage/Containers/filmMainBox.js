import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';


import { getCurrentFilm } from "../Selectors";
import * as actionCreators from "../Actions/";
import FilmBox from '../../FilmInfoPage/Components/Filmbox/';
import {getFilmInfo} from '../services/';

class FilmMainBox extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        getFilmInfo(this.props.match.params.id).
            then(res=> {
                console.log('res',res);
            this.props.actions.watchFilm({
                idFilm: res.id,
                name: res.nameFilm,
                description: res.description,
                images: res.images
            });
        })
            .catch(err => console.log(err));
    }

    render() {
        let props = {
            name: this.props.currentFilm.name,
            description: this.props.currentFilm.description,
            images: this.props.currentFilm.images
        };
        return (
          <FilmBox {...props}/>
        );
    }
}

FilmMainBox.propTypes = {
    currentFilm: PropTypes.object,
    actions: PropTypes.shape({
        getFilmInfo: PropTypes.func.isRequired
    })
};

const mapStateToProps = (state) => {
    return {
        currentFilm: getCurrentFilm(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilmMainBox));