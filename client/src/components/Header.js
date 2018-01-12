import React, { Component } from "react";
import Navigation from "./Navigation";
import "../css/App.css";


class Header extends Component {
  render() {
    return (
      <header>
        <Navigation />
      </header>
    );
  }
}

export default Header;
