import axios from "./axios.customize";

const createUserAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/todos";
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data);

}

const updateUserAPI = (id, userId, title) => {
    const URL_BACKEND = "/todos";
    const data = {
        id: id,
        userId: userId,
        title: title
    }
    return axios.put(URL_BACKEND, data);

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/todos";
    return axios.get(URL_BACKEND);
}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI
}
