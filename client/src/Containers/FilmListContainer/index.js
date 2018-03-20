import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import * as actionCreators from "../../Actions/";
import ListFilm from '../../Components/ListFilm/';

class FilmListContainer extends Component {

    constructor(props) {
        super(props);
        this.getFilmList = this.getFilmList.bind(this);
    }

    componentWillMount() {
        this.getFilmList()
            .then(res => {
                this.props.actions.loadFilmList(res);
            })
            .catch(err => console.log(err));
    }

    getFilmList = async () => {
        const response = await fetch('/getAllFilms');
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        return body;
    };

    render() {
        return (
                <ListFilm filmList={this.props.filmList}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filmList: state.reducer.filmListReducer.filmList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(FilmListContainer);