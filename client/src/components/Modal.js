import React, { Component } from "react";
import unitCollectorGame from "../img/unitCollectorGame.jpg";
import Museumapp from "../img/museumVisitPlanner_homepage.png";
import "./Modal.css";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    let imageToRender = null;
    if(this.props.imageUri === "unitCollectorImage"){
      imageToRender = unitCollectorGame;
    }else if (this.props.imageUri === "museumVisitPlanner"){
      imageToRender = Museumapp;
    }
    return (
      <div>
        <div className='modalOverlay' onClick = {() => {
              this.props.setModal();
            }}>
          <div className='modalContent'>
          <img src={ imageToRender } alt="Screenshot of the museum homepage app" />
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
