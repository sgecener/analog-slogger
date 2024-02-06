




export const TypeFilter = ({ setTypeSelect, types }) => {
  

    return (
      <div className="filter-btn">
        
          <select onChange={(event) => {
            setTypeSelect(event.target.value)
          }}
          
          >
            <option value= "All">All Cameras</option>
            {
            
            types.map((type) => {
              return <option value={type} key={type}>{type}</option>;
            })}
          </select>
        
      </div>
    );
  };
  