import { combineReducers } from 'redux';

const reducer = (state= {user: ''},action) => {
    switch(action.type) {
        case 'LOG_IN':
            return Object.assign({},state,{user: action.payload.user})
        default: return state;
    }
}
export default reducer;