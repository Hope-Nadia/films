export default function nameSearchFilterReducer (state={ filters: {nameSearch: ''}}, action)
{
    switch(action.type){
        case 'LOAD_FILM-LIST': {
            return Object.assign({}, state, {
                filters : {
                    nameSearch: ''
                }
            })
        }
        case 'SEARCH_FILM': {
            return Object.assign({}, state, {
               filters : {
                   nameSearch: action.payload.searchValue
               }
            })
        }
        default: return state;
    }
}