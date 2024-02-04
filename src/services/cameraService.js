

export const getAllCameras = () => {

    return fetch("http://localhost:8088/cameras").then((res) => res.json());
}

export const getCameraById = (id) => {
    return fetch(`http://localhost:8088/cameras/${id}`).then((res) => res.json());
}