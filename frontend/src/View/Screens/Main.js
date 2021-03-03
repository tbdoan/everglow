// Imports
import temp_plant from "../Images/temp_plant.jpg";
import PlantDisplay from "../Components/PlantDisplay";
import background from "../../View/Images/mainbackground.jpg";
import "./Main.css";
import BatteryDisplay from "../Components/BatteryDisplay.js";
import SolarSensorDisplay from "../Components/SolarSensorDisplay.js";
import OnOffDisplay from "../Components/OnOffDisplay.js";
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

function Main() {
  const [volt, setVolt] = useState(0);
  useInterval(() => {
    // Your custom logic here
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => setVolt(data.solarPower));
  }, 10000);

  useEffect(() => {
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => setVolt(data.solarPower));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title"> Everglow Dashboard </h1>
      </header>
      <body>
        <p className="name">
          {" "}
          <NameDisplay />{" "}
        </p>
        <table class="mainTable">
          <tr class="mainRow">
            <td className="leftbox">
              {" "}
              <SolarSensorDisplay volt={volt} />
            </td>
            <td className="plantBox">
              {" "}
              <PlantDisplay />{" "}
            </td>
            <td className="rightBox">
              <BatteryDisplay volt={volt} />
            </td>
          </tr>
        </table>
      </body>
    </div>
  );
}

export default Main;
