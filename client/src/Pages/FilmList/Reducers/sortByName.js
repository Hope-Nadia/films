export default function sortByName (state= false, action)
{   let result;
    switch(action.type){
        case 'LOAD_FILM_LIST':
        case 'NONE_SORT': {
            result = false;
            break;
        }
        case 'SORT_BY_NAME': {
            result =  true;
            break;
        }
        default: {
            result = state;
            break;
        }
    }
    return result;
}