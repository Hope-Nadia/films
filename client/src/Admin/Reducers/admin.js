export default function admin (state=false , action)
{
    let result;
    switch(action.type){
        case 'LOGIN_ADMIN': {
            result = true;
            break;
        }
        case 'LOGOUT':
        case 'LOGIN':
        case 'EXIST_USER':{
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