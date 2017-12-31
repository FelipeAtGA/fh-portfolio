import React, { Component } from "react";
import MuseumVisitApp from "./MuseumVisitApp";
import UnitCollectorGame from "./UnitCollectorGame";
import "./Webdevpro.css"

class Webdevpro extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    console.log(this.state.type);
    return (
      <div>
        <hr />
        <MuseumVisitApp />
        <UnitCollectorGame />
      </div>
    );
  }
}

export default Webdevpro;
