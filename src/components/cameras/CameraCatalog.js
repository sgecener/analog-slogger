import { useEffect, useState } from "react"
import { getAllCameras } from "../../services/cameraService"
import { Cameras } from "./Cameras"
import { TypeFilter } from "./CameraTypeFilter"


export const CameraCatalog = () => {

    const [cameras, setCameras] = useState([])
    const [filteredCameras, setFilteredCameras] = useState([]);
    const [typeSelect, setTypeSelect] = useState({});
    // unique types
    const types = [...new Set(cameras.map(camera => camera.type))];


    useEffect(() => {
        getAllCameras().then((camerasArr) => {
            setCameras(camerasArr)
        })
    }, [])
        


      useEffect(() => {
       
        if (typeSelect != "All") {
            console.log("entered");
          const filteredCameras = cameras.filter(
            (camera) => camera.type == typeSelect
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
                return (<Cameras camera={cameraObj} />)
            })}

            
            </div>
        </section>
    )
}