export default function signupError (state='' , action)
{
    let result;
    switch(action.type){
        case 'LOGIN': {
            result = '';
            break;
        }
        case 'SIGNUP_ERROR': {
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