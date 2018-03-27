import {combineReducers, createStore} from "redux";
import {routerReducer} from "react-router-redux";

import filmList from '../FilmListPage/Reducers/filmList';
import searchField from '../FilmListPage/Reducers/searchField';
import firstLoad from '../FilmListPage/Reducers/firstLoad';
import nameSearch from '../FilmListPage/Reducers/nameSearchFilter';
import sortByName from '../FilmListPage/Reducers/sortByName';

const store = createStore(combineReducers ({
    filmList,
    searchField,
    firstLoad,
    nameSearch,
    sortByName,
        routing: routerReducer
    })
);
export default store;