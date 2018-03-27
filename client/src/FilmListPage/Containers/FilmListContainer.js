import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";


import * as actionCreators from "../Actions/";
import ListFilm from '../Components/ListFilm/index';
import {getFilmList} from "../services/index";
import { getRightFilmList, getFirstLoad }  from '../Selectors/index';

class FilmListContainer extends Component {

    constructor(props) {
        super(props);

    }
    componentWillMount() {
        if(!this.props.firstLoad){
            getFilmList()
                .then(res => {
                    this.props.actions.loadFilmList(res);
                })
                .catch(err => console.log(err));
        }
    }
    render() {
        return (
                <ListFilm filmList={this.props.filmList} firstLoad ={this.props.firstLoad}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filmList: getRightFilmList(state),
        firstLoad: getFirstLoad(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

FilmListContainer.propTypes = {
    filmList: PropTypes.array,
    firstLoad: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        loadFilmList: PropTypes.func,
        noneSort: PropTypes.func,
        searchFilm: PropTypes.func,
        sortByMark: PropTypes.func,
        sortByName: PropTypes.func
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(FilmListContainer);