export const watchFilm = (film)=> {
    return {
        type: 'WATCH_FILM',
        payload: {
            id: film.idFilm,
            name: film.name,
            description: film.description,
            images: film.images
        }
    }
};