import  {createSelector } from 'reselect';

export const getUserValue = (state)=> state.user;

export const getUser =createSelector(
    [getUserValue],
    (error) => error
);

export const getAuthValue = (state)=> state.authenticated;

export const getAuthenticated =createSelector(
    [getAuthValue],
    (error) => error
);
