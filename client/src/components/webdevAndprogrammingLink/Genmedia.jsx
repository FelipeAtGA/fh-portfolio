import React, { Component } from 'react';
import Nosferatu from '../../video/Nosferatu_MusicForVampires_Scaled_Cut.mp4';
import '../../css/Nosferatu.css';

class Genmedia extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.stopVid = this.stopVid.bind(this);
  }

  stopVid() {
    const stop = document.querySelectorAll("[id^= 'myVideo']");
    console.log('inside this stopVid ', stop);
    //stop.pause();

  }


  render() {
    return (
      <div>
        <h1>Hello from Genmedia</h1>
        <div className="genmediaWrapper clearfix">
          <div className="floating-box clearfix">
          <button
            onClick={this.stopVid}
          > stop </button>

            <video
              id="myVideo"
              className="upperVideos"
              src={Nosferatu}
            />

            <video
              id="myVideo1"
              className="upperVideos"
              src={Nosferatu}
            />

            <video
              id="myVideo2"
              className="upperVideos"
              src={Nosferatu}
            />
          </div>
          <div className="floating-box clearfix">
            <video
              id="myVideo3"
              className="center"
              src={Nosferatu}
            />
          </div>
          <div className="floating-box clearfix">
            <video
              id="myVideo4"
              className="lowerVideos"
              src={Nosferatu}
            />

            <video
              id="myVideo5"
              className="lowerVideos"
              src={Nosferatu}
            />

            <video
              id="myVideo6"
              className="lowerVideos"
              src={Nosferatu}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Genmedia;
