import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar"; //importing the Navbar component
import TextForm from "./components/TextForm";
function App() {
  //App is a component.
  return (
    <>
      <Navbar title="TextUtils+" aboutText="About TextUtils+" />
      <div className="container my-3">
        {/* <About/> */}
        <TextForm heading="Enter your Text Below to Analyse" />
      </div>
    </>
  );
}

export default App; //export default App; is used to export the component.
