import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import authenticated from '../Main/Reducers/authenticated';
import user from '../Main/Reducers/user';
import searchField from '../Pages/FilmList/Reducers/searchField';
import nameSearch from '../Pages/FilmList/Reducers/nameSearchFilter';
import sortByName from '../Pages/FilmList/Reducers/sortByName';
import firstLoad from '../Pages/FilmList/Reducers/firstLoad';
import filmList from '../Pages/FilmList/Reducers/filmList';
import loginError from '../Pages/LogIn/Reducers/loginError';
import disableButtons from '../Pages/SignUp/Reducers/disableButtons';
import signupError from '../Pages/SignUp/Reducers/signupError';
import currentComment from '../Pages/FilmInfo/Reducers/currentComment';
import currentFilm from '../Pages/FilmInfo/Reducers/currentFilm';
import comments from '../Pages/FilmInfo/Reducers/comments';
import images from '../Pages/FilmInfo/Reducers/images';
import mark from '../Pages/FilmInfo/Reducers/mark';
import markError from '../Pages/FilmInfo/Reducers/markError';

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
    currentComment,
    authenticated,
    images,
    mark,
    markError,
    routing: routerReducer,
    form: formReducer
    })
);
export default store;