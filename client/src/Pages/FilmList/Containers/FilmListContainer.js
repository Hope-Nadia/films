import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import ListFilm from '../Components/ListFilm/';
import {getFilmList} from "../services/";
import { getRightFilmList }  from '../Selectors/';

class FilmListContainer extends Component {

    constructor(props) {
        super(props);
        this.moreInfoClick = this.moreInfoClick.bind(this);
    }

    componentWillMount() {
            getFilmList()
                .then(res => {
                    this.props.actions.loadFilmList(res);
                })
                .catch(err => console.log(err));
    }

    moreInfoClick (e) {
        this.props.history.push(`/filmList/film/${(e.currentTarget.name).replace(/\s/ig,'_')}/${e.currentTarget.id}`);
    }

    render() {
        let props = {
            filmList: this.props.filmList,
            moreInfoClick: this.moreInfoClick,
        };
        return (
                <ListFilm {...props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filmList: getRightFilmList(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

FilmListContainer.propTypes = {
    filmList: PropTypes.array,
    actions: PropTypes.shape({
        loadFilmList: PropTypes.func,
        noneSort: PropTypes.func,
        searchFilm: PropTypes.func,
        sortByMark: PropTypes.func,
        sortByName: PropTypes.func
    })
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FilmListContainer));