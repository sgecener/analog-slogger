

export const getAllCameras = () => {

    return fetch("http://localhost:8088/cameras").then((res) => res.json());
}

export const getCameraById = (id) => {
    return fetch(`http://localhost:8088/cameras/${id}`).then((res) => res.json());
}


export const postCamera = (camera) => {
    return fetch("http://localhost:8088/cameras", {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(camera)
        
    })
}

export const editCamera = (camera) => {
    return fetch(`http://localhost:8088/cameras/${camera.id}` , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(camera),
    }).then((res) => res.json());
  }