// Imports
import temp_plant from '../Images/temp_plant.jpg'
import PlantDisplay from '../Components/PlantDisplay'
import background from '../../View/Images/mainbackground.jpg'
import './Main.css';


function Main() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 id="title"> Plamp Dashboard </h1>
          </header>
          <body>
            <table class = "mainTable">
              <tr class = "mainRow">
                 <td className= "leftbox"> on off switch </td> 
                 <td className="plantBox"> <PlantDisplay /> </td> 
                 <td className = "rightBox">battery icon thing</td> 
              </tr>
            </table>
          </body>
        </div>
      );
}

export default Main;
