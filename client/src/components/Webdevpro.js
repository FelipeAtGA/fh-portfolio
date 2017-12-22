import React, { Component } from "react";

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
      </div>
    );
  }
}

export default Webdevpro;
