import  {createSelector } from 'reselect';

export const getFilmList = (state) => state.filmList ;
export const getSearchNameFilter = (state) =>state.nameSearch ;
export const getSortByNameValue = (state)=> state.sortByName ;
export const getFirstLoadValue = (state)=> state.firstLoad;
export const getSearchFieldValue = (state)=> state.searchField;
//добавиться сортировка по средней оценке. export const getSortMarkValue = (state)=> state.reducer.sortByMarkReducer.filters.sortByMark ;

export const getRightFilmList = createSelector(
    [ getFilmList,getSearchNameFilter, getSortByNameValue],
    (filmList, nameSearch, sortByName) =>{
        let newList = [];
            filmList.map(item => {
                let reg = new RegExp(nameSearch,'i');
                if(reg.test(item.filmName)) {
                    newList.push(item);
                }
            });

        if(sortByName) {
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
export const getFirstLoad = createSelector (
    [getFirstLoadValue],
    (firstLoad) => firstLoad
);
export const getSearchField = createSelector (
    [getSearchFieldValue],
    (value) => value
);