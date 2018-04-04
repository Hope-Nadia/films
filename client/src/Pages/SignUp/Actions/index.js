
export const signupFail =(error)=> {
    return {
        type: 'SIGNUP_ERROR',
        payload: {
            error: error
        }
    }
};
export const disableButtons =()=> {
    return {
        type: 'DISABLE_BUTTONS',
        payload: {

        }
    }
};
export const enableButtons =()=> {
    return {
        type: 'ENABLE_BUTTONS',
        payload: {

        }
    }
};