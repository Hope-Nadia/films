
export default function filmList (state=[] , action)
{
    let result;
    switch(action.type){
        case 'LOAD_FILM_LIST': {
            result = action.payload.filmList;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}