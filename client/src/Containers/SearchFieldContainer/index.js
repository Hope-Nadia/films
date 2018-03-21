import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';

import * as actionCreators from "../../Actions/";
import SearchField from '../../Components/SearchField/';

class SearchFieldContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSearch=this.handleSearch.bind(this);
    }

    handleSearch(e){
            console.log('Handle search',e.target.value);
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
        searchFieldValue: state.reducer.searchFieldReducer.searchFieldValue
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(SearchFieldContainer);