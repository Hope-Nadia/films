import  {createSelector } from 'reselect';

export const getAdminValue = (state)=> state.admin;
export const getAdmin =createSelector(
    [getAdminValue],
    (value) => value
);
