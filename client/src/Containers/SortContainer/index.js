import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';

import * as actionCreators from "../../Actions/";
import { sortingValue} from '../../Selectors/';
import SortField from '../../Components/SortField/';



class SortContainer extends Component {

    constructor(props) {
        super(props);
        this.handleSort= this.handleSort.bind(this);
    }
     handleSort(e){
        console.log(e.target.value, this.props);
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

export default connect(mapStateToProps,mapDispatchToProps)(SortContainer);