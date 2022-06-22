//Importing the React Components
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar"; //importing the Navbar component
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light"); //we are defining the mode of the navbar.
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  //Toggling the mode of the navbar like light and dark mode.
  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
    }
  };
  return (
    <>
      <Navbar
        title="Text Utilz+"
        aboutText="About Text Utilz+"
        mode={mode}
        toggleMode={toggleSwitch}
      />
      <Alert alert={alert} mode={mode}/>
      <div className="container my-3">
        {/* <About/> */}
        <TextForm heading="Enter Your Text Below To Analyse" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}

export default App; //export default App; is used to export the component.
