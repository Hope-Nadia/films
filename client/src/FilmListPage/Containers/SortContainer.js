import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";

import * as actionCreators from "../Actions/index";
import { sortingValue} from '../Selectors/index';
import SortField from '../Components/SortField/';


class SortContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSort= this.handleSort.bind(this);
    }
     handleSort(e){
        if(e.target.value==='name') this.props.actions.sortByName();
        if(e.target.value==='') this.props.actions.noneSort();
         // if(e.target.value==='mark') this.props.actions.sortByMark();
     }
    render() {
        let props = {
            value: this.props.sortValue,
            handleSort: this.handleSort
        };
        return (
           <SortField {...props} />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sortValue: sortingValue(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

SortContainer.propTypes = {
    sortValue: PropTypes.string,
    actions: PropTypes.shape({
        loadFilmList: PropTypes.func,
        noneSort: PropTypes.func,
        searchFilm: PropTypes.func,
        sortByMark: PropTypes.func,
        sortByName: PropTypes.func
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(SortContainer);