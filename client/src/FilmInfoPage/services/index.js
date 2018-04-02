export const getFilmInfo = async (id) => {
  let response = await fetch(`http://localhost:3000/filmInfo/${id}`);
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
}