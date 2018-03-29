
export default function user (state={} , action)
{
    let result;
    switch(action.type){
        case 'LOGIN':
        case 'EXIST_USER': {
            result = {
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
            };
            break;
        }
        case 'LOGOUT': {
            result = {
                id: '',
                email: '',
                password: ''
            };
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}