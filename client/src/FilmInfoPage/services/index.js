export const getFilmGallery = async (id) => {
  let response = await fetch(`http://localhost:3000/filmGallery/${id}`);
    //  http://localhost:3000  https://salty-island-73231.herokuapp.com/
    let body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
};