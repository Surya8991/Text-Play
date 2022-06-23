import React from 'react' //We are importing React
import PropTypes from 'prop-types';//We are importing the PropTypes library to use the PropTypes.element type.
import {Link} from "react-router-dom";
export default function Navbar(props) {//props is an object that contains the properties that are passed to the component.
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode}  bg-${props.mode}`}>
  <div className="container-fluid">
    <h1><Link className="navbar-brand" to="/">{props.title}</Link></h1>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
          {/* Navbar element for Home*/}
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
          {/* //Navbar element for About */}
        </li>
        </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-light" type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
  <input className="form-check-input" type="checkbox"  id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
    </div>
  </div>
</nav>);
}
//PropTypes is a library that allows us to define the type of data that is being passed to the component.
Navbar.propTypes={
    title:PropTypes.string.isRequired,//We are defining the type of data that is being passed to the component,and it must be an String. and required is a required property.
    aboutText:PropTypes.string.isRequired
}
  //We are defining the default values that are being passed to the component.if the props are not passed to the component,the default values will be used.
Navbar.defaultProps={
    title:"TextUtils+",//Default value for title
    aboutText:"about"//default value for aboutText
}