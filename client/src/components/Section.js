import React, { Component } from 'react';
import '../App.css';
import logo from '../tvLogoLinesv2.png';


class Section extends Component {
  render() {
    return (
      <div>
        <div id="name">
          <div className="branding">
            <p className="brand">FELIPE HERNANDEZ</p>
            <p className="tagLine">Front End Web Developer</p>
          </div>
          <div id="logo">
            <img src={logo} width="200px"/>
          </div>
        </div>
      </div>
    );
  };
};

export default Section;
