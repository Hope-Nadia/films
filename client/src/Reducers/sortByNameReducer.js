export default function sortByNameReducer (state={ filters: {sortByName: false}}, action)
{
    switch(action.type){
        case 'LOAD_FILM-LIST':
        case 'NONE_SORT': {
            return Object.assign({}, state, {
                filters : {
                    sortByName: false
                }
            })
        }
        case 'SORT_BY_NAME': {
            return Object.assign({}, state, {
                filters : {
                    sortByName: true
                }
            })
        }
        default: return state;
    }
}