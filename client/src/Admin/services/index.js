import HOST_NAME from "../../host_name";

export const deleteFilm = async(id) =>{
    const response = await fetch(`${HOST_NAME}/film`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: id
        })
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
};

export const addFilm = async(values) =>{
    const response = await fetch(`${HOST_NAME}/newFilm`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: values.name,
            description: values.description,
            shortDescription: values.shortDescription,
            poster: values.poster,
            images: values.images
        })
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
};