// Imports
import React, { useState, useEffect } from 'react';
import OnIcon from '../Images/on_icon.png';
import OffIcon from '../Images/off_icon.png';






function OnOffDisplay() {

    const [isOn, setIsOn] = useState(false)

    useEffect( () => {
        fetch("https://plamp-123.herokuapp.com/plamp")
        // use it to populate battery state
        .then(response => response.json())
        .then(data => {console.log(data.power)
                       setIsOn(data.power)
                      })
    },[])


    if (isOn){
        return(  
            <img alt="On" src={OnIcon}/>
        )
    } else {
        return(  
            <img alt="Off" src={OffIcon}/>
        )
    }
    
}

export default OnOffDisplay