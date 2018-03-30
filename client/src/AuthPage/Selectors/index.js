import  {createSelector } from 'reselect';

export const getLoginErrorValue = (state)=> state.loginError;

export const getLoginError =createSelector(
    [getLoginErrorValue],
    (error) => error
);

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