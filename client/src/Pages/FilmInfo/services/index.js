export const getFilmInfo = async (id) => {
    let response = await fetch(`https://salty-island-73231.herokuapp.com/filmInfo/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmGallery = async (id) => {
    let response = await fetch(`https://salty-island-73231.herokuapp.com/filmGallery/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmMark = async (id) => {
    let response = await fetch(`https://salty-island-73231.herokuapp.com/filmMark/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmComments = async(id) =>{
    let response = await fetch(`https://salty-island-73231.herokuapp.com/filmComments/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const sendComment = async(values) =>{
    const response = await fetch('https://salty-island-73231.herokuapp.com/comment', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: values.comment,
            idUser: values.idUser,
            idFilm: values.idFilm
        })
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
};
export const sendMark = async(values) =>{
    const response = await fetch('https://salty-island-73231.herokuapp.com/mark', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            mark: values.mark,
            email: values.email,
            idFilm: values.idFilm
        })
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
};