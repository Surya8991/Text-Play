import React from 'react'

function Footer(props) {
  return (
    <>
       <footer id="footer">
       <div
        className={`container text-${props.mode === "dark" ? "light" : "dark"}`}
      >
    <a className={`text-${props.mode === "dark" ? "light" : "dark"}`} href='https://twitter.com/SURYA_L1998' target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-twitter fa-2x"></i></a>
    <a className={`text-${props.mode === "dark" ? "light" : "dark"}`} href='https://www.linkedin.com/in/surya-l/' target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-linkedin fa-2x"></i></a>
    <a className={`text-${props.mode === "dark" ? "light" : "dark"}`} href='https://github.com/Surya8991' target="_blank" rel="noopener noreferrer"><i className="social-icon fab fa-github fa-2x"></i></a>
    <h5>© Copyright 2022-{new Date().getFullYear()} - Surya L</h5>
    </div>
  </footer>

    </>
  )
}

export default Footer