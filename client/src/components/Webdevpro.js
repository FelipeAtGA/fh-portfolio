import React, { Component } from "react";
import MuseumVisitApp from "./MuseumVisitApp";
import UnitCollectorGame from "./UnitCollectorGame";
import Mywebpage from "./Mywebpage";
import "../css/Webdevpro.css"

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
        <h1 className="pageTitle">Web development<br />and programming</h1>
        <MuseumVisitApp    setModal={ this.props.setModal } />
        <UnitCollectorGame setModal={ this.props.setModal } />
        <Mywebpage         setModal={ this.props.setModal } />
      </div>
    );
  }
}

export default Webdevpro;
