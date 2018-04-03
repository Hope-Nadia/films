export default function currentComment (state='', action)
{
    let result;
    switch(action.type){
        case 'WRITE_COMMENT':{
            result = action.payload.currentComment;
            break;
        }
        case 'SEND_COMMENT': {
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