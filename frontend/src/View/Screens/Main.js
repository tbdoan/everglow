// Imports
import PlantDisplay from "../Components/PlantDisplay";
import "./Main.css";
import "./base.css";
import "./basic-grid.css";
import BatteryDisplay from "../Components/BatteryDisplay.js";
import SolarSensorDisplay from "../Components/SolarSensorDisplay.js";
import NameDisplay from "../Components/NameDisplay.js";
import React, { useState, useEffect, useRef } from "react";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

function Main(props) {
  const [volt, setVolt] = useState(0);
  const [batLevel, setBatLevel] = useState(0)
  useInterval(() => {
    // Your custom logic here
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => {setVolt(data.solarPower);
        setBatLevel(data.batteryLevel);})
  }, 5000);

  useEffect(() => {
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => {setVolt(data.solarPower);
        setBatLevel(data.batteryLevel);})

  }, []);

  return (
    <div className="App">
      <header className={props.darkMode ? "App-header-dark" : "App-header-light"}>
        <h1 id="title" className="nav-text">
          Everglow Dashboard
        </h1>
      </header>
      <body>
        <p className="name">
          <NameDisplay />
        </p>
        <div class="basic-grid">
          <div className="card">
            <SolarSensorDisplay volt={volt} />
          </div>
          <div className="card">
            <PlantDisplay batLevel={batLevel}/>
          </div>
          <div className="card">
            <BatteryDisplay volt={volt} batLevel={batLevel} />
          </div>
        </div>
      </body>
    </div>
  );
}

export default Main;
