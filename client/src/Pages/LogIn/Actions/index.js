export const login = (user)=> {
    return {
        type: 'LOGIN',
        payload: {
            id: user.idUser,
            email: user.email,
            password: user.password
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