export default function firstLoadReducer (state={ firstLoad: false}, action)
{
    switch(action.type){
        case 'LOAD_FILM-LIST': {
            return Object.assign({}, state, {
                firstLoad: true
            })
        }
        default: return state;
    }
}