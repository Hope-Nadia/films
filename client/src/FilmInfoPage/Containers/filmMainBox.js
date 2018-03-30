import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import {getRightFilmList} from "../../FilmListPage/Selectors";
import { getCurrentFilm } from "../Selectors";
import * as actionCreators from "../Actions/";
import FilmBox from '../../FilmInfoPage/Components/Filmbox/';
import {getFilmGallery} from '../services/';

class FilmMainBox extends Component {

    constructor(props) {
        console.log('mainp',props);
        super(props);
        this.findRightFilm = this.findRightFilm.bind(this);
    }

    componentDidMount() {
        let cf = this.findRightFilm();
        getFilmGallery(this.props.match.params.id).
            then(res=> {
            this.props.actions.watchFilm({
                idFilm: cf.idFilm,
                name: cf.filmName,
                description: cf.description,
                images: res.images
            });
        })
            .catch(err => console.log(err));
    }

    findRightFilm() {
        let currentFilm = {};
        this.props.filmList.map(film => {
            if(`${film.idFilm}` == this.props.match.params.id) {
                currentFilm = film;
            }
        });
        return currentFilm;
    };

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


const mapStateToProps = (state) => {
    console.log('film main box',state);
    return {
        filmList: getRightFilmList(state),
        currentFilm: getCurrentFilm(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilmMainBox));