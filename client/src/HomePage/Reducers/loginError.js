export default function loginError (state='' , action)
{
    let result;
    switch(action.type){
        case 'LOGIN': {
            result = '';
            break;
        }
        case 'LOGIN_ERROR': {
            result = action.payload.error;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}