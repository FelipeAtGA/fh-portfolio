import React, { Component } from 'react';
import unitCollectorGame    from '../img/unitCollectorGame.jpg';
import Museumapp            from '../img/museumVisitPlanner_homepage.png';
import MywebsiteImage       from '../img/portfolioHomepageImg.png';
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
