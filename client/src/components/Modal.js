import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className='modalOverlay' onClick = {() => {
              this.props.setModal();
            }}>
          <div className='modalContent'>
          <img src={ this.props.imageUri } alt="Screenshot of the museum homepage app" />
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
