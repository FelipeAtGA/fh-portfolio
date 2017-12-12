import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../img/fh_logo_squared.png";

const Navigation = () => {
  return (
    <nav>
      <div className="logo_wrapper">
        <Link to="#">
          <img src={logo} />
        </Link>
      </div>
      <ul>
        <li className="dropdown">
          <span>Work &nbsp;<i class="fa fa-caret-down" aria-hidden="true"></i></span>
          <ul className="dropdown-content">
            <li><Link to="#">web dev. + programming</Link></li>
            <li><Link to="#">photoshop + illustrator</Link></li>
            <li><Link to="#">video + animation</Link></li>
          </ul>
        </li>
        <li><Link to="#">About</Link></li>
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
