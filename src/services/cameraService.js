

export const getAllCameras = () => {

    return fetch("http://localhost:8088/cameras").then((res) => res.json());
}