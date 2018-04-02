import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import filmList from '../FilmListPage/Reducers/filmList';
import searchField from '../FilmListPage/Reducers/searchField';
import firstLoad from '../FilmListPage/Reducers/firstLoad';
import nameSearch from '../FilmListPage/Reducers/nameSearchFilter';
import sortByName from '../FilmListPage/Reducers/sortByName';
import user from '../onAllPages/Reducers/user';
import loginError from '../AuthPage/Reducers/loginError';
import signupError from '../AuthPage/Reducers/signupError';
import disableButtons from '../AuthPage/Reducers/disableButtons';
import currentFilm from '../FilmInfoPage/Reducers/currentFilm';
import comments from '../FilmInfoPage/Reducers/comments';

const store = createStore(combineReducers ({
    filmList,
    searchField,
    firstLoad,
    nameSearch,
    sortByName,
    user,
    loginError,
    signupError,
    disableButtons,
    currentFilm,
    comments,
    routing: routerReducer,
    form: formReducer
    })
);
export default store;