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
export const loadImages = (images)=> {
    return {
        type: 'LOAD_IMAGES',
        payload: {
            images: images
        }
    }
};
export const loadMark = (mark)=> {
    return {
        type: 'LOAD_MARK',
        payload: {
            mark: mark
        }
    }
};
export const sendMark = ()=> {
    return {
        type: 'SEND_MARK',
        payload: {

        }
    }
};
export const writeComment = (comment)=> {
    return {
        type: 'WRITE_COMMENT',
        payload: {
            currentComment: comment
        }
    }
};
export const resetComment = (comment)=> {
    return {
        type: 'SEND_COMMENT',
        payload: {
            currentComment: comment
        }
    }
};
export const markError = (error)=> {
    return {
        type: 'MARK_ERROR',
        payload: {
            error: error
        }
    }
};
export const watchImage = (image)=> {
    return {
        type: 'WATCH_IMAGE',
        payload: {
            image: image
        }
    }
};
export const closeImage = ()=> {
    return {
        type: 'CLOSE_IMAGE',
        payload: {

        }
    }
};