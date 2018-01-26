import React, { Component } from 'react';
import ThemeetingPoster from '../../img/theMeetingVideoPoster.png';
import Purpleboxposter from '../../img/purpleBoxPoster.png';
import Characterstudy from '../../img/characterStudy.png';
import Psaposter from '../../img/psa.png';
import Definespace from '../../img/definingSpaceVideoPoster.png';
import Processingsketch from '../../img/processingSketch.png';
import '../../css/VideoMation.css';

class VideoMation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoProps: ['themeeting', 'purplebox', 'characterstudy', 'psa', 'definespace', 'processingsketch'],
      imagePosters: [ThemeetingPoster, Purpleboxposter, Characterstudy, Psaposter, Definespace, Processingsketch],
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
              style={{ backgroundImage: `url(${this.state.imagePosters[2]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[2], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 3</h2>
            <p>Paragraph 3</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[3]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[3], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 4</h2>
            <p>Paragraph 4</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[4]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[4], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 5</h2>
            <p>Paragraph 5</p>
          </div>
          <div className="projectWrapper">
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.imagePosters[5]})` }}
              onClick={() => { this.props.setModal(this.state.videoProps[5], true); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>Video 6</h2>
            <p>Paragraph 6</p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoMation;
