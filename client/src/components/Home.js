import React, { Component } from "react";
import Homeimage from "./Homeimage";
import Welcommessage from "./WelcomeMessage";
import './App.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Welcommessage />
        <Homeimage />
      </div>
    );
  }
}

export default Home;
