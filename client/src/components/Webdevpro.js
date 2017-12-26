import React, { Component } from "react";
import "./Webdevpro.css"
import Museumapp from "../img/museumVisitPlanner_homepage.png";

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
        <h1>Greetings from Webdevpro.js</h1>
        <div className="webdevproGridWrapper clearfix">
          <div className="imageWrapper">
            <img src={ Museumapp } alt="Screenshot of the museum homepage app" />
          </div>
          <div>
            <h3>Lorem Ipsun</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Webdevpro;
