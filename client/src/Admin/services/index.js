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