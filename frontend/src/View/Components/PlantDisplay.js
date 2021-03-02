// Imports
//import plantgif from '../Images/live_plant.gif'
import plantpng from '../Images/live_plant2.png'
import plant40 from '../Images/live_plant40battery.png'
import plant5 from '../Images/live_plant0battery.png'
import plant0 from '../Images/dead_plant.png'

import "./styles.css";
import React, { useState, useEffect } from 'react';

function PlantDisplay() {

    const [batLevel, setBatLevel] = useState(0)

    useEffect( () => {
        fetch("https://plamp-123.herokuapp.com/plamp")
        // use it to populate battery state
        .then(response => response.json())
        .then(data => {console.log(data.batteryLevel)
                       setBatLevel(data.batteryLevel)
                      })
    },[])

    if ( batLevel > 70 ) {
        return(
            <img className="photo" src={plantpng}/>
        )
    } else if(batLevel <= 70 && batLevel > 40 ){
        return(
            <img className="photo" src={plant40}/>
        )
    } else if (batLevel <= 40 && batLevel > 5) {
        return (
            <img className="photo" src={plant5}/>
        )
    } else {
        return(
            <img className="photo" src={plant0}/>
        )
    }

}

export default PlantDisplay