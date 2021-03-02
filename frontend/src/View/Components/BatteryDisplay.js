// Imports
import React, { useState, useEffect } from 'react';
import ZeroBattery from '../Images/0.png';
import TwentyBattery from '../Images/20.png';
import FourtyBattery from '../Images/40.png';
import SixtyBattery from '../Images/60.png';
import EightyBattery from '../Images/80.png';
import HundredBattery from '../Images/100.png';






function BatteryDisplay() {

    const [batLevel, setBatLevel] = useState(0)

    useEffect( () => {
        fetch("https://plamp-123.herokuapp.com/plamp")
        // use it to populate battery state
        .then(response => response.json())
        .then(data => {console.log(data.batteryLevel)
                       setBatLevel(data.batteryLevel)
                      })
    },[])


    if (batLevel > 90){
        return(  
            <img alt="Battery" src={HundredBattery}/>
        )
    } else if(batLevel > 70){
        return(  
            <img alt="Battery" src={EightyBattery}/>
        )
    } else if(batLevel > 50){
        return(  
            <img alt="Battery" src={SixtyBattery}/>
        )
    } else if(batLevel > 30){
        return(  
            <img alt="Battery" src={FourtyBattery}/>
        )
    } else if(batLevel > 10){
        return(  
            <img alt="Battery" src={TwentyBattery}/>
        )
    } else{
        return(  
            <img alt="Battery" src={ZeroBattery}/>
        )
    }
    
}

export default BatteryDisplay