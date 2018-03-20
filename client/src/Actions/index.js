export const loadFilmList = (filmList)=> (
    {
        type: 'LOAD_FILM-LIST',
        payload: {
            filmList: filmList
        }
    }
)