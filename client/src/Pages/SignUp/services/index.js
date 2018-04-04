export const trySignUp = async (value)=> {
    const response = await fetch('http://localhost:3000/signup', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: value.email,
            password: value.password
        })
    });
    const body = await response.json();
    if(response.status !== 200) throw Error(body.message);
    return body;
};