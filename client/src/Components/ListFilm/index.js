import React, { Component } from 'react';
import FilmBox from '../FilmBox/index';

const ListFilm =(props) =>{
    let boxes = [];
    if(props.filmList!==[]) {
        props.filmList.map(i =>{
            boxes.push(<FilmBox key={i.idFilm} name={i.filmName} description={i.shortDescription}/>)
        });
    }
    return (
        <React.Fragment>
        {boxes}
        </React.Fragment>
    )
} ;

export default ListFilm;