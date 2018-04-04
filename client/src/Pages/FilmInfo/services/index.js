export const getFilmInfo = async (id) => {
    let response = await fetch(`http://localhost:3000/filmInfo/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmGallery = async (id) => {
    let response = await fetch(`http://localhost:3000/filmGallery/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmMark = async (id) => {
    let response = await fetch(`http://localhost:3000/filmMark/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const getFilmComments = async(id) =>{
    let response = await fetch(`http://localhost:3000/filmComments/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

export const sendComment = async(values) =>{
    const response = await fetch('http://localhost:3000/comment', {
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
    const response = await fetch('http://localhost:3000/mark', {
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