import React from 'react';//importing React which is a library that allows us to create components.
import ReactDOM from 'react-dom/client';//importing ReactDOM which is used to render the component to the DOM.
import './index.css';//importing the index.css file which contains the styles for the app.
import App from './App';//importing the App component which is the root component of the application.
import reportWebVitals from './reportWebVitals';//importing the reportWebVitals function which is used to report the web vitals.


//creating a root element in the DOM.which will be used to render the component to the DOM.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(//rendering the component to the DOM,which are passing the App component to the root.
  //React.StrictMode is a component that allows us to use the strict mode.
  <React.StrictMode>
    {/* //calling the App component */}
    <App />
  </React.StrictMode>
);
reportWebVitals();
//calling the reportWebVitals function.Which is used to report the web vitals.Web vitals are used to measure the performance of the application.

