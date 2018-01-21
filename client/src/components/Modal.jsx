import React, { Component } from 'react';
import unitCollectorGame    from '../img/unitCollectorGame.jpg';
import Museumapp            from '../img/museumVisitPlanner_homepage.png';
import MywebsiteImage       from '../img/portfolioHomepageImg.png';
import Iartposter from '../img/posterD3-2.jpg';
import Spaceroom from '../img/Spaceroom.jpg';
import Portrait from '../img/selfPortrait.gif';
import Kiki from '../img/kiki.jpg';
import '../css/Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let imageToRender = null;
    if (this.props.imageUri === 'unitCollectorImage') {
      imageToRender = unitCollectorGame;
    } else if (this.props.imageUri === 'museumVisitPlanner') {
      imageToRender = Museumapp;
    } else if (this.props.imageUri === 'mywebsiteFrontPageImg') {
      imageToRender = MywebsiteImage;
    } else if (this.props.imageUri === 'iarposter') {
      imageToRender = Iartposter;
    } else if (this.props.imageUri === 'spaceroom') {
      imageToRender = Spaceroom;
    } else if (this.props.imageUri === 'portrait') {
      imageToRender = Portrait;
    } else if (this.props.imageUri === 'illustration') {
      imageToRender = Kiki;
    }
    return (
      <div>
        <div
          className="modalOverlay"
          onClick={() => { this.props.setModal(); }}
          onKeyDown={() => { this.props.setModal(); }}
          role="button"
          tabIndex="0"
        >
          <div className="modalContent">
            <img src={imageToRender} alt="Screenshot of the museum homepage app" />
            <div>
              <br />
              <p>( click anywhere to close this window )</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
