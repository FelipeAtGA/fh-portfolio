import React, { Component } from 'react';
import '../../css/VideoMation.css';

class VideoMation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Digital Video and Animation</h1>
        <div className="videoWrapper clearfix">
          <video src="">Sorry, your browser doesn't support embeded videos</video>
        </div>
      </div>
    );
  }
}

export default VideoMation;
