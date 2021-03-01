// Imports
import temp_plant from '../Images/temp_plant.jpg'
import './Main.css';
import BatteryDisplay from '../Components/BatteryDisplay.js';

function Main() {
    return (
        <div className="App">
          <header className="App-header">
            <h1> Plamp Dashboard </h1>
          </header>
          <body>
            <table class = "mainTable">
              <tr class = "mainRow">
                 <td>on off</td> 
                 <td>the plant emoji thing</td> 
                 <td><BatteryDisplay/></td> 
              </tr>
            </table>
          </body>
        </div>
      );
}

export default Main