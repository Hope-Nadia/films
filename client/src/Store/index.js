import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import filmList from '../FilmListPage/Reducers/filmList';
import searchField from '../FilmListPage/Reducers/searchField';
import firstLoad from '../FilmListPage/Reducers/firstLoad';
import nameSearch from '../FilmListPage/Reducers/nameSearchFilter';
import sortByName from '../FilmListPage/Reducers/sortByName';
import user from '../HomePage/Reducers/user';
import loginError from '../HomePage/Reducers/loginError';

const store = createStore(combineReducers ({
    filmList,
    searchField,
    firstLoad,
    nameSearch,
    sortByName,
    user,
    loginError,
    routing: routerReducer,
    form: formReducer
    })
);
export default store;