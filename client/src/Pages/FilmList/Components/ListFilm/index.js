import React  from 'react';
import ReactList from 'react-list';
import PropTypes from "prop-types";

import FilmBox from '../FilmBox/index';

class ListFilm extends  React.Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(index,key) {
        return <FilmBox
            name={this.props.filmList[index].filmName}
            key={key}
            description={this.props.filmList[index].shortDescription}
            poster={this.props.filmList[index].poster}
            idFilm={this.props.filmList[index].idFilm}
            moreInfoClick={this.props.moreInfoClick}
            editClick={this.props.editClick}
            mark={parseFloat(this.props.filmList[index].averageMark.toFixed(1))}
            admin={this.props.admin}
        />
    }
    render() {
            if(this.props.filmList.length === 0) return <div>Nothing to show</div>;
            return (
            <ReactList
            itemRenderer={this.renderItem}
            length={this.props.filmList.length}
            type='variable'
            />
        )
    }

} ;

ListFilm.propTypes = {
    filmList: PropTypes.array.isRequired,
    moreInfoClick: PropTypes.func.isRequired
};

export default ListFilm;