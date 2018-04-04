export const tryLogIn = async (values) => {
    const response = await fetch(`http://localhost:3000/login/${values.email}&${values.password}`);
    const body = await response.json(); // так как etch озвращает strean-бъект, то преобразование его в json тоже promise
    if (response.status !== 200) throw Error(body.message);
    return body;
};