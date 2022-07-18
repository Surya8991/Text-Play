//Importing the React Components
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar"; //importing the Navbar component
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = useState("light"); //we are defining the mode of the navbar.
  const [alert, setAlert] = useState(null);
  const [modeOn,setModeOn]=useState("Enable dark mode")
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  //Toggling the mode of the navbar like light and dark mode. 
  const toggleSwitch = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0F0E0E";
      setModeOn("Enable Light Mode");
      showAlert("Enabled Dark Mode", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setModeOn("Enable Dark Mode");
      showAlert("Enabled Light Mode", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text-Utility-Pro"
          aboutText="About Text-Utility-Pro"
          mode={mode}
          toggleMode={toggleSwitch}
          modeOn={modeOn}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/about"
              element={ 
              <About
                  mode={mode}
                  title="About Text-Utility-Pro"
                /> 
               }
            ></Route>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Try Text-Utility-Pro : UpperCase to LowerCase , Remove Spaces , Extract Emails And Links, Download Text"
                  mode={mode}
                  title="About Text-Utility-Pro"
                  showAlert={showAlert}
                  des="Enter your Text Below to Analyse"
                />
               }
            ></Route>
          </Routes> 
        </div>
        <Footer mode={mode}/>
      </Router>
    </>
  );
}

export default App; //export default App; is used to export the component.
