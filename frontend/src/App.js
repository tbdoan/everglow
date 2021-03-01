import "./App.css";
import Main from "./View/Screens/Main.js";
import History from "./View/Screens/History.js";
import Settings from "./View/Screens/Settings.js";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  function switchFunction() {
    setDarkMode(!darkMode);
  }
  return (
    <div id="wholeAssApp" className={darkMode ? "dark" : "light"}>
      <div>
        <History />
      </div>
      <div>
        <Settings switchFunction={switchFunction} />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
