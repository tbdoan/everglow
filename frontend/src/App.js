import './App.css';
import Main from './View/Screens/Main.js'
import SettingsButton from './View/Components/SettingsButton'
import HistoryButton from './View/Components/HistoryButton'
import History from './View/Screens/History.js'
import Settings from './View/Screens/Settings.js'

function App() {
  return (
    <div>
      <div><History /></div>
      <div><Settings /></div>
      <div><Main /></div>
    </div>
  );
}

export default App;
