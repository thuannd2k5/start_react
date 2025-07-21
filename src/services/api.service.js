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
const deleteUserAPI = (id) => {
    const URL_BACKEND = `/todos/${id}`;
    return axios.delete(URL_BACKEND);

}

const fetchAllUserAPI = () => {
    const URL_BACKEND = "/todos";
    return axios.get(URL_BACKEND);
}

const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `api/v1/file/upload`;
    let config = {
        headers: {
            "upload-type": folder,
            "Content-Type": 'multipart/form-data'
        }
    }
    const bodyFormData = new FormData();
    bodyFormData.append("fileImg", file);//đặt giống hệt ở trong postman


    return axios.post(URL_BACKEND, bodyFormData, config);
}

const updateAvatarAPI = (id, avatar) => {
    const URL_BACKEND = "/todos";
    const data = {
        id: id,
        avatar: avatar
    }
    return axios.put(URL_BACKEND, data);

}

export {
    createUserAPI, updateUserAPI, fetchAllUserAPI, deleteUserAPI,
    handleUploadFile, updateAvatarAPI
}
