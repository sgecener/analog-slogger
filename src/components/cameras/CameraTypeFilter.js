
import "./TypeFilter.css"



export const TypeFilter = ({ setTypeSelect, types }) => {
  

    return (
      <div className="dropdown dropbtn">
        
          <select onChange={(event) => {
            setTypeSelect(event.target.value)
          }}
          
          >
            <option value= "All">All Cameras</option>
            {
            
            types.map((type) => {
              return <option  value={type} key={type}>{type}</option>;
            })}
          </select>
        
      </div>
    );
  };
  