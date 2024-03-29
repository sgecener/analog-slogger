


export const getAllRepairs = () => {
  return fetch("http://localhost:8088/repairs?_expand=user&_expand=camera").then((res) => res.json());
}

export const getRepairById = (repairId) => {
  return fetch(`http://localhost:8088/repairs/${repairId}`).then((res) => res.json())
}

export const postRepair = (repair) => {
    return fetch("http://localhost:8088/repairs" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(repair)
    }).then((res) => res.json());
  }

  export const editRepair = (repair) => {
    return fetch(`http://localhost:8088/repairs/${repair.id}` , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(repair),
    }).then((res) => res.json());
  }

  // export const deleteRepair = (id) => {
  //   console.log(id);
  //   return fetch(`http://localhost:8088/repairs/${id}`, {
  //       method: "DELETE"
  //   }
  //   )
  // }

  export const deleteRepair = (id) => {

    return fetch(`http://localhost:8088/repairs/${id}` , {
        method: "DELETE"
    }
    ).then((res) => res.json())


  }