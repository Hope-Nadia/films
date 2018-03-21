import React, { Component } from 'react';
import ReactList from 'react-list';

import FilmBox from '../../Components/FilmBox/index';

class ListFilm extends  React.Component {
    constructor(props){
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(index,key) {
        return<FilmBox key={key} name={this.props.filmList[index].filmName} description={this.props.filmList[index].shortDescription}/>
    }
    render() {
            if(this.props.filmList.length === 0 && this.props.firstLoad) return <div>Nothing to show</div>;

            return (
            <ReactList
            itemRenderer={this.renderItem}
            length={this.props.filmList.length}
            type='variable'
            />

        )
    }

} ;

export default ListFilm;