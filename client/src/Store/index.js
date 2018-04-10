import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";
import { reducer as formReducer } from 'redux-form';

import authenticated from '../Main/Reducers/authenticated';
import user from '../Main/Reducers/user';
import searchField from '../Pages/FilmList/Reducers/searchField';
import nameSearch from '../Pages/FilmList/Reducers/nameSearchFilter';
import sortByName from '../Pages/FilmList/Reducers/sortByName';
import sortByMark from '../Pages/FilmList/Reducers/sortByMark';
import filmList from '../Pages/FilmList/Reducers/filmList';
import disableButtons from '../Pages/SignUp/Reducers/disableButtons';
import currentComment from '../Pages/FilmInfo/Reducers/currentComment';
import currentFilm from '../Pages/FilmInfo/Reducers/currentFilm';
import comments from '../Pages/FilmInfo/Reducers/comments';
import watchImage from '../Pages/FilmInfo/Reducers/watchImage';
import images from '../Pages/FilmInfo/Reducers/images';
import mark from '../Pages/FilmInfo/Reducers/mark';
import markError from '../Pages/FilmInfo/Reducers/markError';
import admin from '../Admin/Reducers/admin';

const store = createStore(combineReducers ({
    filmList,
    searchField,
    nameSearch,
    sortByName,
    sortByMark,
    user,
    disableButtons,
    currentFilm,
    comments,
    currentComment,
    authenticated,
    images,
    mark,
    markError,
    watchImage,
    admin,
    routing: routerReducer,
    form: formReducer
    })
);
export default store;