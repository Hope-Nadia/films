import HOST_NAME from '../../host_name';

export const existedUser = async (values) => {
    const response = await fetch(`${HOST_NAME}/existedUser/${values.id}&${values.email}`);
    const body = await response.json(); // так как etch озвращает stream-бъект, то преобразование его в json тоже promise
    if (response.status !== 200) throw Error(body.message);
    return body;
};