import "./App.css";
import Main from "./View/Screens/Main.js";
import History from "./View/Screens/History.js";
import background from "./View/Images/mainbackground.jpg";
import Settings from "./View/Screens/Settings.js";

function App() {
  return (
    <div className="wholeAssApp">
      <div>
        <History />
      </div>
      <div>
        <Settings />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
