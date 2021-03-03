// Imports
import React, { useState, useEffect } from 'react';
import solarOn from '../Images/solarOn.png';
import solarOff from '../Images/solarOff.png';






function SolarSensorDisplay(props) {

    const [isOn, setIsOn] = useState(false)

    useEffect( () => {
        setIsOn(props.volt >= 1)
    },[])


    if (isOn){
        return( 
            <div>
                <img alt="On" src={solarOn}/>
                <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {props.volt}mV </header>    
             </div> 
            
        )
    } else {
        return(
            <div>  
                <img alt="Off" src={solarOff}/>
                <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {props.volt}mV </header>
            </div>
        )
    }
    
}

export default SolarSensorDisplay