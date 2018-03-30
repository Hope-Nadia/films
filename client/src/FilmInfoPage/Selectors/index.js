import  {createSelector } from 'reselect';

export const getCurrentFilmValue = (state) => state.currentFilm ;

export const getCurrentFilm = createSelector(
    [getCurrentFilmValue],
    (film) => film
);