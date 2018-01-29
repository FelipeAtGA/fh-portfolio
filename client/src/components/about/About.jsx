import React, { Component } from 'react';
import Aboutimage from '../../img/fhR.jpg';
import '../../css/About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">About</h1>
        <div className="aboutWrapper clearfix">
          <div
            className="aboutImgtWrapper"
            style={{ backgroundImage: `url(${Aboutimage})` }}
          />
          <div className="aboutTextWrapper">
            <ul>
              <li><h2>Felipe Hernandez - Web Developer</h2></li>
              <li>I am passionate about problem solving and creating.
              So, I found programming to be the perfect tool for my
              personality and passion. I have a BA in Emerging Media
              Studies from Hunter College and a certificate from General
              Assembly. I am in a constant learning and creative mode.
              Please check out my resume in this page for more details.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
