import "./App.css";
import Main from "./View/Screens/Main.js";
import History from "./View/Screens/History.js";
import Settings from "./View/Screens/Settings.js";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState();

  function switchFunction() {
    // frontend change
    setDarkMode(!darkMode);
    fetch("https://plamp-123.herokuapp.com/plamp/changeDarkMode", {
      method: "PUT",
    });
  }

  useEffect(() => {
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then((response) => response.json())
      .then((data) => {
        setDarkMode(data.darkMode);
      });
  }, []);

  return (
    <div id="wholeAssApp" className={darkMode ? "dark" : "light"}>
      <div>
        <History />
      </div>
      <div>
        <Settings switchFunction={switchFunction} darkMode={darkMode} />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default App;
