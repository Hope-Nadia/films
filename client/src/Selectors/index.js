import { createSelector } from 'reselect';

export const getFilmList = (state) => state.reducer.filmListReducer.filmList ;

export const getSearchNameFilter = (state) =>state.reducer.nameSearchFilterReducer.filters.nameSearch ;
export const getSortByNameValue = (state)=> state.reducer.sortByNameReducer.filters.sortByName ;
//добавиться сортировка по средней оценке. export const getSortMarkValue = (state)=> state.reducer.sortByMarkReducer.filters.sortByMark ;

export const getRightFilmList = createSelector(
    [ getFilmList,getSearchNameFilter, getSortByNameValue],
    (list, searchFilter, sortName) =>{
        let newList = [];
        list.map(item => {
            if(item.filmName.toLowerCase().trim().includes(searchFilter)) {
                newList.push(item);
            }
        });

        if(sortName) {
            newList.sort((a,b)=> {
                if(a.filmName > b.filmName) return 1;
                if(a.filmName < b.filmName) return -1;
            })
        };

        return newList;
    }

);

export const sortingValue = createSelector(
    [getSortByNameValue],
    (name) => {
        if(name) return 'name';
        return '';
    }
);