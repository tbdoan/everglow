// Imports
import PlantDisplay from "../Components/PlantDisplay";
import "./Main.css";
import "../../base.css";
import "../../basic-grid.css";
import BatteryDisplay from "../Components/BatteryDisplay.js";
import OnOffDisplay from "../Components/OnOffDisplay.js";
import NameDisplay from "../Components/NameDisplay.js";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="title"> Everglow Dashboard </h1>
      </header>
      <body>
        <p className="name">
          <NameDisplay />
        </p>
        <section className="basic-grid">
          <div className="card">
            <OnOffDisplay />
          </div>
          <div className="card">
            <PlantDisplay />
          </div>
          <div className="card">
            <BatteryDisplay />
          </div>
        </section>
      </body>
    </div>
  );
}

export default Main;
