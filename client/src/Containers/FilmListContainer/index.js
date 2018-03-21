import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import { getRightFilmList }  from '../../Selectors/';
import * as actionCreators from "../../Actions/";
import ListFilm from '../ListFilm/';

class FilmListContainer extends Component {

    constructor(props) {
        super(props);
        this.getFilmList = this.getFilmList.bind(this);
    }

    componentWillMount() {
        if(!this.props.firstLoad){
            this.getFilmList()
                .then(res => {
                    this.props.actions.loadFilmList(res);
                })
                .catch(err => console.log(err));
        }
    }

    getFilmList = async () => {
        const response = await fetch('/getAllFilms');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
                <ListFilm filmList={this.props.filmList} firstLoad ={this.props.firstLoad}/>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        filmList: getRightFilmList(state),
        firstLoad: state.reducer.firstLoadReducer.firstLoad
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FilmListContainer);