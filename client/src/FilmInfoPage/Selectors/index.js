import  {createSelector } from 'reselect';

export const getCurrentFilmValue = (state) => state.currentFilm ;

export const getCurrentFilm = createSelector(
    [getCurrentFilmValue],
    (film) => film
);

export const getCommentsValue = (state) => state.comments ;

export const getComments = createSelector(
    [getCommentsValue],
    (film) => film
);

export const getImagesValue = (state) => state.images ;

export const getImages = createSelector(
    [getImagesValue],
    (film) => film
);

export const getCurrentCommentValue = (state) => state.currentComment ;

export const getCurrentComment = createSelector(
    [getCurrentCommentValue],
    (film) => film
);