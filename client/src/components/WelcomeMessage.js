import React, { Component } from "react";
import Typist from "./Typist";
import "./Welcomemessage.css";

class Welcomemessage extends Component {
  render() {
    return (
      <div className="messageWrapper">
        <div className="brand">
          <h1 className="name">Felipe Hernandez</h1>
          <p className="ocupation">web developer</p>
        </div>
        <Typist />
      </div>
    );
  }
}

export default Welcomemessage;
