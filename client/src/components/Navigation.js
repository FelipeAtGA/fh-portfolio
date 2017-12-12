import React from "react";
import "./Navbar.css";
import logo from "../img/fh_logo_squared.png";

const Navigation = () => {
  return (
    <nav>
      <div className="logo_wrapper">
        <a href="#">
          <img src={logo} />
        </a>
      </div>
      <ul>
        <li><a href="#">Work</a></li>
        <li><a href="#">About</a></li>
        <li>
          <a href="#">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
