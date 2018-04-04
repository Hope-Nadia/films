export default function firstLoad (state=false, action)
{   let result;
    switch(action.type){
        case 'LOAD_FILM_LIST': {
            result= true;
            break;
        }
        default: {
            result = state;
            break;
        }
    }
    return result;
}