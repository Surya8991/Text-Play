//Importing the React Components
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar"; //importing the Navbar component
import TextForm from "./components/TextForm";
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState("light");//we are defining the mode of the navbar.
  //Toggling the mode of the navbar like light and dark mode.
  const toggleSwitch=()=>
  {
    if (mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
    }
     else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="TextUtils+" aboutText="About TextUtils+" mode={mode} toggleMode={toggleSwitch}/>
      <div className="container my-3">
        {/* <About/> */}
        <TextForm heading="Enter your Text Below to Analyse" mode={mode}/>
      </div>
    </>
  );
}

export default App; //export default App; is used to export the component.
