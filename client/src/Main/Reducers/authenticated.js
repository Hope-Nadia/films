
export default function authenticated (state=false , action)
{
    let result;
    switch(action.type){
        case 'LOGIN':
        case 'EXIST_USER': {
            result = true;
            break;
        }
        case 'LOGOUT': {
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