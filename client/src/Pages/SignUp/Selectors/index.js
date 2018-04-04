import  {createSelector } from 'reselect';

export const getSignupErrorValue = (state)=> state.signupError;

export const getSignupError =createSelector(
    [getSignupErrorValue],
    (error) => error
);

export const getDisableButtonsValue = (state)=> state.disableButtons;

export const getDisableButtons =createSelector(
    [getDisableButtonsValue],
    (value) => value
);