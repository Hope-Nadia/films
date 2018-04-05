export default function watchImage (state={image: '',watch: false} , action)
{
    let result;
    switch(action.type){
        case 'WATCH_IMAGE': {
            result ={
                image: action.payload.image,
                watch:true
            };
            break;
        }
        case 'CLOSE_IMAGE':
        case 'WATCH_FILM': {
            result = {
                image: '',
                watch:false
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