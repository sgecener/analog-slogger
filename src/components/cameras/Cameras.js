import { useNavigate } from "react-router-dom"


export const Cameras = ({ camera }) => {

    const navigate = useNavigate()
    

    const handleClick = () => {

        navigate(`/form/${camera.id}`)
    }

    return (
        
        <article>
            <div>{camera.name}</div>
            <div>{camera.type}</div>
            <button onClick={handleClick} className="btn-info">Send For Repair</button>
            <div>${camera.price}</div>
            
        </article>
        
        
    )

}