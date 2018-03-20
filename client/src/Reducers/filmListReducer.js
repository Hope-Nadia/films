
export default function filmListReducer (state={ filmList: [] }, action)
{
    switch(action.type){
        case 'LOAD_FILM-LIST': {
            return Object.assign({}, state, {
                filmList: action.payload.filmList
            })
        }
        default: return state;
    }
}