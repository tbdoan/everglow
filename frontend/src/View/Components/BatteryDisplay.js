// Imports
import React, { useState, useEffect } from 'react';
import ZeroBattery from '../Images/0.png';
import TwentyBattery from '../Images/20.png';
import FourtyBattery from '../Images/40.png';
import SixtyBattery from '../Images/60.png';
import EightyBattery from '../Images/80.png';
import HundredBattery from '../Images/100.png';

// CHARGING IMAGES
import ZeroCharge from '../Images/0Charging.png'
import TwentyCharge from '../Images/20Charging.png'
import FourtyCharge from '../Images/40Charging.png'
import SixtyCharge from '../Images/60Charging.png'
import EightyCharge from '../Images/80Charging.png'
import HundredCharge from '../Images/100Charging.png'






function BatteryDisplay(props) {

    const [batLevel, setBatLevel] = useState(0)

    useEffect( () => {
        fetch("https://plamp-123.herokuapp.com/plamp")
        // use it to populate battery state
        .then(response => response.json())
        .then(data => {console.log(data.batteryLevel)
                       setBatLevel(data.batteryLevel)
                      })
    },[])

    if (props.volt === 0) {
        if (batLevel > 90){
            return(  
                <div>
                    <img alt="Battery" src={HundredBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 70){
            return(  
                <div>
                    <img alt="Battery" src={EightyBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
                
            )
        } else if(batLevel > 50){
            return(  
                <div>
                    <img alt="Battery" src={SixtyBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 30){
            return(
                <div>
                    <img alt="Battery" src={FourtyBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 5){
            return(  
                <div>
                    <img alt="Battery" src={TwentyBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else{
            return( 
                <div> 
                    <img alt="Battery" src={ZeroBattery}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        }
    }
    else { // CHARGING  CHARGING  CHARGING  CHARGING  CHARGING  CHARGING  CHARGING  CHARGING  CHARGING  CHARGING 
        if (batLevel > 90){
            return(  
                <div>
                    <img alt="Battery" src={HundredCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 70){
            return(  
                <div>
                    <img alt="Battery" src={EightyCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
                
            )
        } else if(batLevel > 50){
            return(  
                <div>
                    <img alt="Battery" src={SixtyCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 30){
            return(
                <div>
                    <img alt="Battery" src={FourtyCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else if(batLevel > 5){
            return(  
                <div>
                    <img alt="Battery" src={TwentyCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        } else{
            return( 
                <div> 
                    <img alt="Battery" src={ZeroCharge}/>
                    <header style={{color: "#ffffff", 'font-size': '50px', 'font-weight': 'bold'}}> {batLevel}% </header>
                </div>
            )
        }
    }
}

export default BatteryDisplay