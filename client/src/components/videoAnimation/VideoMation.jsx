import React, { Component } from 'react';
import ThemeetingPoster from '../../img/theMeetingVideoPoster.png';
import Purpleboxposter from '../../img/purpleBoxPoster.png';
import '../../css/VideoMation.css';

class VideoMation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProps: ['themeeting', 'purplebox'],
      imagePosters: [ThemeetingPoster, Purpleboxposter],
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Digital Video and Animation</h1>
        <div className="videoWrapper clearfix">
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[0]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[0], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video</h2>
            <p>Paragraph</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[1]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[1], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 2</h2>
            <p>Paragraph 2</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[0]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[0], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 3</h2>
            <p>Paragraph 3</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoMation;
