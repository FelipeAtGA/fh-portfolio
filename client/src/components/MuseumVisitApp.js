import React from 'react';
import Museumapp from "../img/museumVisitPlanner_homepage.png";

const MuseumVisitApp = () => {
  return (
    <div>
      <div className="webdevproGridWrapper clearfix cards">
        <div className="imageWrapper">
          <img src={ Museumapp } alt="Screenshot of the museum homepage app" />
        </div>
        <div className="workDescription">
          <h3>Museum Visit Planner</h3>
          <p>For my capstone project, I built a full CRUD application from the ground up. Using the MVC model, I scaffolded with node.js, then added back-end with express.js, and implemented react.js for the front-end. I also used a public API from a famous museum in nyc, using Json and axios. The project was completed in 14 days</p>
          <a className="linkToLiveApp" href="https://dry-plains-91322.herokuapp.com/" >Live app</a>
        </div>
        <div className="workTech">
          <h3>Technologies used:</h3>
          <ul>
            <li className="listTech">HTML + CSS</li>
            <li className="listTech">RESTfull</li>
            <li className="listTech">MVC model</li>
            <li className="listTech">Node.js</li>
            <li className="listTech">Express.js</li>
            <li className="listTech">React.js</li>
            <li className="listTech">Axios</li>
            <li className="listTech">PostgreeSQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MuseumVisitApp;
