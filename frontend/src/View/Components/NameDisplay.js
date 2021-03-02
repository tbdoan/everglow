// Imports
import React, { useState, useEffect } from 'react';

function NameDisplay() {

    const [name, setName] = useState(0)

    useEffect( () => {
        fetch("https://plamp-123.herokuapp.com/plamp")
        // retrieve info regarding name of plamp
        .then(response => response.json())
        .then(data => {console.log(data.name)
                       setName(data.name)
                      })
    },[])

    return (
        <h1 style={{color: "#ffffff"}}>Name: {name}</h1>
    );
}

export default NameDisplay
