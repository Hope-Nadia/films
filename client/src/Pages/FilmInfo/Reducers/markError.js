export default function markError (state='' , action)
{
    let result;
    switch(action.type){
        case 'MARK_ERROR': {
            result = action.payload.error;
            break;
        }
        case 'WATCH_FILM':{
            result = '';
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}