import React, { Component } from "react";
import MywebsiteImage from "../img/portfolioHomepageImg.png";

class Mywebsite extends Component {
constructor(props){
    super(props);
    this.state = {
      imageName: "mywebsiteFrontPageImg",
    }
  }


  render() {
    return (
      <div>
        <div className="webdevproGridWrapper clearfix cards">
          <div className="imageWrapper">
            <img src={ MywebsiteImage } alt="Screenshot of my portfolio homepage app"
                onClick = { (image) => { this.props.setModal(this.state.imageName); } }
            />
          </div>
          <div className="workDescription">
            <h3>FH Portfolio website</h3>
            <p>Lorem Ipsum</p>
            <a className="linkToLiveApp" href="http://localhost:3000/" target="_black">Live app</a>
            <a className="linkToAppInGithub" href="https://github.com/FelipeAtGA/fh-portfolio" target="_black">App on &nbsp;<i className="fa fa-github AppBttn" aria-hidden="true"></i></a>
          </div>
          <div className="workTech">
            <h3>Technologies used:</h3>
            <ul>
              <li className="listTech">HTML + CSS</li>
              <li className="listTech">JavaScript</li>
              <li className="listTech">Node.js</li>
              <li className="listTech">React.js</li>
              <li className="listTech">Bootstrap</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Mywebsite;
