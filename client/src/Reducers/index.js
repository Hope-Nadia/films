import { combineReducers } from 'redux';

import filmListReducer from './filmListReducer';
import searchFieldReducer from './searchFieldReducer';
import firstLoadReducer from './firstLoadReducer';
import nameSearchFilterReducer from './nameSearchFilterReducer';
import sortByNameReducer from './sortByNameReducer';

const reducer = combineReducers({
    filmListReducer,
    searchFieldReducer,
    firstLoadReducer,
    nameSearchFilterReducer,
    sortByNameReducer
});
export default reducer;