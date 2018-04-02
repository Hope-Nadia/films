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
export const loadComments = (comments)=> {
    return {
        type: 'LOAD_COMMENTS',
        payload: {
          comments: comments
        }
    }
};