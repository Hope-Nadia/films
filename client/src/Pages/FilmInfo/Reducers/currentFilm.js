
export default function currentFilm (state={} , action)
{
    let result;
    switch(action.type){
        case 'WATCH_FILM': {
            result = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                images: action.payload.images
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