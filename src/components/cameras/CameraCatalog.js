import { useEffect, useState } from "react";
import { getAllCameras } from "../../services/cameraService";
import { TypeFilter } from "./CameraTypeFilter";
import { Cameras } from "./Cameras";


export const CameraCatalog = () => {

    const [cameras, setCameras] = useState([])
    const [filteredCameras, setFilteredCameras] = useState([]);
    const [typeSelect, setTypeSelect] = useState("All");
    // unique types
    const types = [...new Set(cameras.map(camera => camera.type))];

    const renderCameras = () => {
        getAllCameras().then((camerasArr) => {
            setCameras(camerasArr)
        })
    }


    useEffect(() => {
        renderCameras();
    }, []);

    useEffect(() => {
        if (typeSelect !== "All") {
            const filteredCameras = cameras.filter(
                (camera) => camera.type === typeSelect
            );
            setFilteredCameras(filteredCameras);
        } else {
            setFilteredCameras(cameras);
        }
    }, [typeSelect, cameras]);

    return (
        <section>
            <h2>Repair Catalog</h2>
            <TypeFilter setTypeSelect={setTypeSelect} types={types} />

            <div>
                {filteredCameras.map((cameraObj) => {
                    return (<Cameras camera={cameraObj} key={cameraObj.id} renderCameras={renderCameras} />)
                })}
            </div>
        </section>
    )
}
