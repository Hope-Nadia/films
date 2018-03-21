
export default function searchFieldReducer (state={ searchFieldValue: '' }, action)
{
    switch(action.type){
        case 'LOAD_FILM-LIST': {
            return Object.assign({}, state, {
                searchFieldValue: ''
            })
        }
        case 'SEARCH_FILM' :{
            return Object.assign({}, state, {
                searchFieldValue: action.payload.searchValue
            })
        }
        default: return state;
    }
}