import React from 'react';
import unitCollectorGame from "../img/unitCollectorGame.jpg";

const UnitCollectorApp = () => {
  return (
    <div>
      <div className="webdevproGridWrapper clearfix">
        <div className="imageWrapper">
          <img src={ unitCollectorGame } alt="Screenshot of the museum javascript game app" />
        </div>
        <div className="workDescription">
          <h3>Unit Collector: Js Game</h3>
          <p>For my capstone project, I built a full CRUD application from the ground up. Using the MVC model, I scaffolded with node.js, then added back-end with express.js, and implemented react.js for the front-end. I also used a public API from a famous museum in nyc, using Json and axios. The project was completed in 14 days</p>
          <a className="linkToLiveApp" href="http://unit-collector.bitballoon.com/" target="_black">Live app</a>
        </div>
        <div className="workTech">
          <h3>Technologies used:</h3>
          <ul>
            <li className="listTech">HTML</li>
            <li className="listTech">CSS</li>
            <li className="listTech">JavaScript</li>
            <li className="listTech">Github</li>
            <li className="listTech">CLI</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UnitCollectorApp;
