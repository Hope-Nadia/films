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