export default function images (state=[] , action)
{
    let result;
    switch(action.type){
        case 'LOAD_IMAGES': {
            result = action.payload.images;
            break;
        }
        default:{
            result = state;
            break;
        }
    }
    return result;
}