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
        <li className="dropdown">
          <a href="#">Work &nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></a>
          <ul className="dropdown-content">
            <li><a href="#">web dev. + programming</a></li>
            <li><a href="#">photoshop + illustrator</a></li>
            <li><a href="#">video + animation</a></li>
          </ul>
        </li>
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
