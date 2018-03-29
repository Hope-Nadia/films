import  {createSelector } from 'reselect';

export const getUserValue = (state)=> state.user;

export const getUser =createSelector(
    [getUserValue],
    (error) => error
);
