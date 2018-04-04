export const getFilmList = async () => {
    const response = await fetch('http://localhost:3000/films');
    //  http://localhost:3000/getAllFilms https://salty-island-73231.herokuapp.com/getAllFilms
    // https://salty-island-73231.herokuapp.com/
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};

