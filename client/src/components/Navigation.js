import React from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "../img/fh_logo_squared.png";

const Navigation = () => {
  const element = document.getElementsByTagName("span");

  function active() {
    element[0].style.backgroundColor="#23527c";
    element[0].style.color="#fff";
    element[0].style.fontWeight="500";
  }

  function unactive(e) {
    element[0].style.backgroundColor="inherit";
    element[0].style.color="#000";
    element[0].style.fontWeight="700";
  }

  return (
    <nav>
      <div className="logo_wrapper">
        <Link to="#">
          <img src={logo} alt="Felipe Hernandez brand logo FH"/>
        </Link>
      </div>
      <ul>
        <li className="dropdown" onMouseOver={active} onMouseOut={unactive}>
          <span>Work &nbsp;<i className="fa fa-caret-down" aria-hidden="true"></i></span>
          <ul className="dropdown-content" onMouseOver={active} onMouseOut={unactive}>
            <li><Link to="#">&#8627; web dev. + programming</Link></li>
            <li><Link to="#">&#8627; photoshop + illustrator</Link></li>
            <li><Link to="#">&#8627; video + animation</Link></li>
          </ul>
        </li>
        <li><Link to="#">About</Link></li>
        <li>
          <a href="https://github.com/FelipeAtGA" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/felipe-hernandez/" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>

      </ul>
    </nav>
  );
}

export default Navigation;
