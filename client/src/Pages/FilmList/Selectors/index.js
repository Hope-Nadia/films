import  {createSelector } from 'reselect';

export const getFilmList = (state) => state.filmList ;
export const getSearchNameFilter = (state) =>state.nameSearch ;
export const getSortByNameValue = (state)=> state.sortByName ;
export const getSearchFieldValue = (state)=> state.searchField;
export const getSortByMarkValue = (state)=> state.sortByMark ;

export const getRightFilmList = createSelector(
    [ getFilmList,getSearchNameFilter, getSortByNameValue, getSortByMarkValue],
    (filmList, nameSearch, sortByName, sortByMark) =>{
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
            });
        }

        if(sortByMark) {
            newList.sort((a,b)=> {
                if(a.averageMark < b.averageMark) return 1;
                if(a.averageMark > b.averageMark) return -1;
            })
        }

        return newList;
    }

);

export const sortingValue = createSelector(
    [getSortByNameValue,  getSortByMarkValue],
    (name, mark) => {
        if(name) return 'name';
        if(mark) return 'mark';
        return '';
    }
);

export const getSearchField = createSelector (
    [getSearchFieldValue],
    (value) => value
);