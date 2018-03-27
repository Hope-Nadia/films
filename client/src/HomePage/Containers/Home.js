import React from 'react';
import { connect } from 'react-redux';
import Home from '../Components/main/';

class HomeContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render (){

        return (
            <Home/>
        );
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return(    {

    });

};

export default connect(mapStateToProps)(HomeContainer);