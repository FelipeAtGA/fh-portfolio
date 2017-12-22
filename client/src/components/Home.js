import React, { Component } from "react";
import Homeimage from "./Homeimage";
import Welcommessage from "./WelcomeMessage";
import './App.css';

class Main extends Component {
  render() {
    return (
      <main>
        <div className="App">
          <Welcommessage />
          <Homeimage />
        </div>
      </main>
    );
  }
}

export default Main;
