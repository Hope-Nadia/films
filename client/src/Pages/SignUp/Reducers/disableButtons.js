export default function disableButtons (state=false , action)
{
    let result;
    switch(action.type){
        case 'DISABLE_BUTTONS': {
            result = true;
            break;
        }
        case 'ENABLE_BUTTONS': {
            result = false;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}