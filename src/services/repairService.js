


export default function getRepairs() {
  return fetch("http://localhost:8088/repairs").then((res) => res.json);
}

export default function postRepair(repair) {
    return fetch("http://localhost:8088/repairs" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json" 
        },
        body: JSON.stringify(repair)
    }).then((res) => res.json);
  }

  export default function editRepair() {
    return fetch("http://localhost:8088/repairs").then((res) => res.json);
  }

  export default function deleteRepair(id) {
    return fetch(`http://localhost:8088/repairs/${id}`, {
        method: "DELETE"
    }
    ).then((res) => res.json);
  }