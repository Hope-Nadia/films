import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import { getWatchImage} from "../Selectors";

import Slider from '../Components/ImagePoster/';

class ImagePoster extends Component {

    constructor(props) {
        super(props);
        this.closePoster = this.closePoster.bind(this);
    }
    closePoster() {
        this.props.actions.closeImage();
    }
    render() {
        let props = {
            image: this.props.watchImage.image,
            active: this.props.watchImage.watch,
            closePoster: this.closePoster
        };
        return (
                <Slider {...props}  />
        );
    }
}

ImagePoster.propTypes = {
    watchImage:PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        watchImage: getWatchImage(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ImagePoster));