export default function mark (state=0 , action)
{
    let result;
    switch(action.type){
        case 'LOAD_MARK': {
            result = action.payload.mark;
            break;
        }
        case 'WATCH_FILM':
        case 'SEND_MARK': {
            result = 0;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}