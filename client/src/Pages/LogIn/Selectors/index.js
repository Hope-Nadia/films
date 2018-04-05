import  {createSelector } from 'reselect';

export const getDisableButtonsValue = (state)=> state.disableButtons;
export const getDisableButtons =createSelector(
    [getDisableButtonsValue],
    (value) => value
);