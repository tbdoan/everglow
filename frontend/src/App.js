import './App.css';
import Main from './View/Screens/Main.js'
import SettingsButton from './View/Components/SettingsButton'
import HistoryButton from './View/Components/HistoryButton'
import Title from './View/Components/Title'

function App() {
  return (
    <div>
      <table class = "navbar">
        <tr>
          <td class = "historybuttonbox"><div class = "historybutton" >< SettingsButton/> </div> </td>
          <td class = "titlebox"><div class = "title" ><Title /></div></td>
          <td class = "settingsbuttonbox"><div class = "settingsbutton" ><HistoryButton/> </div> </td>
        </tr>
      </table>
      <div><Main /></div>
    </div>
  );
}

export default App;
