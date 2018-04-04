export const logOut =()=> {
    return {
        type: 'LOGOUT',
    }
};
export const setExistUser =(user)=> {
    return {
        type: 'EXIST_USER',
        payload: {
            id: user.idUser,
            email: user.email,
            password: user.password
        }
    }
};