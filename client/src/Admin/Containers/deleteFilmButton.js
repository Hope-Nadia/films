import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import DeleteButton from '../Components/DeleteButton/'
import { deleteFilm } from '../services/';
import { getRightFilmList }  from '../../Pages/FilmList/Selectors/';
import { getAdmin} from "../Selectors";
import { loadFilmList } from "../../Pages/FilmList/Actions";

class DeleteFilmButton extends Component {

    constructor(props) {
        super(props);
        this.deleteFilm=this.deleteFilm.bind(this);
    }

    componentWillMount() {

    }

    deleteFilm(){
        if(window.confirm('DO you really wnat to delete it?')){
            deleteFilm(this.props.idFilm)
                .then(res =>{
                    let newFilmList = this.props.filmList;
                    for(let i in newFilmList){
                        if(newFilmList[i].idFilm===this.props.idFilm) newFilmList.splice(i,1);
                    };
                   this.props.loadFilmList(newFilmList);
                })
                .catch(error=> console.log(error));
        }
    }

    render() {
        let props = {
            delete: this.deleteFilm,
            admin: this.props.admin
        };
        return (
          <DeleteButton {...props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filmList: getRightFilmList(state),
        admin: getAdmin(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
        loadFilmList: bindActionCreators(loadFilmList,dispatch)
    }
};

DeleteFilmButton.propTypes = {
    filmList: PropTypes.array,
    admin: PropTypes.bool
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(DeleteFilmButton));