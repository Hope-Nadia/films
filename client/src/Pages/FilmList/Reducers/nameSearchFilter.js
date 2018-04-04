export default function nameSearch (state= '', action)
{   let result;
    switch(action.type){
        case 'LOAD_FILM_LIST': {
            result =  '';
            break;
        }
        case 'SEARCH_FILM': {
                 result =  action.payload.searchValue;
            break;
                   }
        default: {
            result = state;
            break;
        }
    }
    return result;
}