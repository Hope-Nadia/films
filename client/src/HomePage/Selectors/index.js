import  {createSelector } from 'reselect';

export const getLoginErrorValue = (state)=> state.loginError;

export const getLoginError =createSelector(
    [getLoginErrorValue],
    (error) => error
);