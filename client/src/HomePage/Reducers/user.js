
export default function user (state={} , action)
{
    let result;
    switch(action.type){
        case 'LOGIN': {
            result = {
                id: action.payload.id,
                email: action.payload.email,
                password: action.payload.password
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