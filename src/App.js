//Importing the React Components
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar"; //importing the Navbar component
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      document.body.style.backgroundColor = "#06283D";
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Enabled Light Mode", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utility-Pro"
          aboutText="About"
          mode={mode}
          toggleMode={toggleSwitch}
        />
        <Alert alert={alert} mode={mode} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={
                <About
                  mode={mode}
                  showAlert={showAlert}
                  heading="About Text-Utility-Pro"
                />
              }
            ></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try Text-Utility-Pro : Word counter , Character counter , UpperCase to LowerCase , Remove Spaces"
                  mode={mode}
                  showAlert={showAlert}
                  des="Enter your Text Below to Analyse"
                />
              }
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App; //export default App; is used to export the component.
