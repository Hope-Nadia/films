export default function sortByMark (state= false, action)
{   let result;
    switch(action.type){
        case 'LOAD_FILM_LIST':
        case 'NONE_SORT':
        case 'SORT_BY_NAME':{
            result = false;
            break;
        }
        case 'SORT_BY_MARK': {
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