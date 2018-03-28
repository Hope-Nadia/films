export const tryLogIn = async (values) => {
    const response = await fetch(`http://localhost:3000/login/${values.email}&${values.password}`);
    //  http://localhost:3000/getAllFilms https://salty-island-73231.herokuapp.com/getAllFilms
    // https://salty-island-73231.herokuapp.com/
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};