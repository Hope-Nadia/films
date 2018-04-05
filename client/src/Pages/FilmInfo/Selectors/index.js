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

export const getMarkValue = (state) => state.mark ;
export const getMark = createSelector(
    [getMarkValue],
    (mark) => mark
);

export const getMarkErrorValue = (state) => state.markError ;
export const getMarkError = createSelector(
    [getMarkErrorValue],
    (mark) => mark
);

export const getWatchImageValue = (state) => state.watchImage;
export const getWatchImage = createSelector(
    [getWatchImageValue],
    (mark) => mark
);