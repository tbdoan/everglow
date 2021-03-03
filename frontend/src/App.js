import "./App.css";
import Main from "./View/Screens/Main.js";
import History from "./View/Screens/History.js";
import Settings from "./View/Screens/Settings.js";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(0);
  function switchFunction() {
    // frontend change
    setDarkMode(!darkMode);
//    fetch("https://plamp-123.herokuapp.com/plamp/changeDarkMode", {
    fetch("http://localhost:8080/plamp/changeDarkMode", {
      method: "PUT",
    });
    console.log( "called" );
  }

  useEffect(() => {
    fetch("https://plamp-123.herokuapp.com/plamp")
      // use it to populate battery state
      .then(response => response.json())
      .then(data => {
        setDarkMode(data.darkMode);
      })
  }, [])

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
