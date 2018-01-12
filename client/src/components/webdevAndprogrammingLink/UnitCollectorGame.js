import React, { Component } from 'react';
import unitCollectorGame from "../../img/unitCollectorGame.jpg";

class UnitCollectorApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      imageName: "unitCollectorImage",
    }
  }

  render() {
    return (
      <div>
        <div className="webdevproGridWrapper clearfix">
          <div className="imageWrapper">
            <img src={ unitCollectorGame } alt="Screenshot of the museum javascript game app"
              onClick = { (image) => { this.props.setModal(this.state.imageName); } }
            />
          </div>
          <div className="workDescription">
            <h3>Unit Collector: Js Game</h3>
            <p>Unit Collector is going to be a version of the game Kaboom, a 1980s arcade game made by Activision for Atari. It has objects randomly falling from the top of the screen down, and the player has to catch these objects to avoid loosing the game. The player scores every time he/she catches an object. I was inspired to create Unit Collector from nostalgia for arcade games and the need to create something 2D.</p>
            <a className="linkToLiveApp" href="http://unit-collector.bitballoon.com/" target="_black">Live app</a>
            <a className="linkToAppInGithub" href="https://github.com/FelipeAtGA/Unit-Collector" target="_black">App on &nbsp;<i className="fa fa-github AppBttn" aria-hidden="true"></i></a>
          </div>
          <div className="workTech">
            <h3>Technologies used:</h3>
            <ul>
              <li className="listTech">HTML</li>
              <li className="listTech">CSS -  animations</li>
              <li className="listTech">JavaScript - objects</li>
              <li className="listTech">JQuery</li>
              <li className="listTech">Github</li>
              <li className="listTech">CLI</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default UnitCollectorApp;
