import React from "react";
import { Link } from "react-router-dom";
import "./navbarStyle.css";
import JALogo from '../Images/resume-logo.jpg'

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <Link className="navbar-brand" to="/">
        <img src={JALogo} style={{ width: "50px", height: "50px" }} />
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              id="navbarTab"
              to="/about"
              className={
                window.location.pathname === "/about" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link
              id="navbarTab"
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              id="navbarTab"
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
