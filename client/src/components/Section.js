import React, { Component } from 'react';
import '../App.css';
import logo from '../tvLogoLinesv2.png';


class Section extends Component {
  render() {
    return (
      <div>
        <div id="branding">
          <div className="name">
            <p className="brand">FELIPE HERNANDEZ</p>
            <p className="tagLine">Front End Web Developer</p>
          </div>
          <div id="logo">
            <img className="img-responsive" src={logo} />
          </div>
        </div>
      </div>
    );
  };
};

export default Section;
