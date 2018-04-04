import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import PropTypes from "prop-types";
import { withRouter }  from 'react-router';

import * as actionCreators from "../Actions/";
import { getCurrentFilm, getImages } from "../Selectors";
import { getFilmGallery } from '../services/';
import Gallery from '../Components/Gallery/';

class GalleryBox extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        getFilmGallery(this.props.match.params.id)
            .then(res=> {
                this.props.actions.loadImages(res.images);
            })
            .catch(error => console.log(error));
    }
    render() {
        let props = {
            images: this.props.images
        };
        return (
            <Gallery {...props}/>
        );
    }
}

GalleryBox.propTypes = {
    currentFilm: PropTypes.object,
    images: PropTypes.array,
    actions: PropTypes.shape({
        loadImages: PropTypes.func
    })
};

const mapStateToProps = (state) => {
    return {
        currentFilm: getCurrentFilm(state),
        images: getImages(state)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(actionCreators,dispatch),
    }
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(GalleryBox));