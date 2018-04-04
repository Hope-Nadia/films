export default function comments (state=[] , action)
{
    let result;
    switch(action.type){
        case 'LOAD_COMMENTS': {
            result = action.payload.comments;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}