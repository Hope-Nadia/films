import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";

import * as actionCreators from "../Actions/";
import {getSearchField} from '../Selectors/';
import SearchField from '../Components/SearchField/';

class SearchFieldContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(e){
            // инициируется событие SEARCH_FILM при котором выставляется фильтр и меняется значение поля поиска
            this.props.actions.searchFilm(e.target.value);
    }

    render() {
        let props = {
            searchValue: this.props.searchFieldValue,
            handleSearch: this.handleSearch
        };
        return (
            <SearchField {...props}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchFieldValue: getSearchField(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

SearchFieldContainer.propsTypes = {
    searchFieldValue: PropTypes.string,
    actions: PropTypes.shape({
        searchFilm: PropTypes.func.isRequired
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchFieldContainer);