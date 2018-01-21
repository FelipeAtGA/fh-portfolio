import React, { Component } from 'react';
import Iartposter from '../../img/posterD3-2.jpg';
import Spaceroom from '../../img/Spaceroom.jpg';
import Portrait from '../../img/selfPortrait.gif';
import Kiki from '../../img/kiki.jpg';
import '../../css/PsAi.css';

class PsAi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Iartposter, Spaceroom, Portrait, Kiki],
      imgpropsnames: ['iarposter', 'spaceroom', 'portrait', 'illustration'],
      titles: ['iARTmix poster', 'Defining space', 'Self portrait', 'Illustration'],
      classes: 'projectWrapper',
      text: [
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam a ultrices nibh. Nullam non sapien in est rutrum pharetra.
        stibulum id varius nisi. Donec eget viverra lorem, et mattis
        lectus. Nulla viverra porta diam vel dapibus. Vestibulum placerat
        ttis justo eget vehicula. Vestibulum quis massa orci. Fusce in
        venenatis sapien.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam a ultrices nibh. Nullam non sapien in est rutrum pharetra.
        stibulum id varius nisi. Donec eget viverra lorem, et mattis
        lectus. Nulla viverra porta diam vel dapibus. Vestibulum placerat
        ttis justo eget vehicula. Vestibulum quis massa orci. Fusce in
        venenatis sapien.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam a ultrices nibh. Nullam non sapien in est rutrum pharetra.
        stibulum id varius nisi. Donec eget viverra lorem, et mattis
        lectus. Nulla viverra porta diam vel dapibus. Vestibulum placerat
        ttis justo eget vehicula. Vestibulum quis massa orci. Fusce in
        venenatis sapien.`,
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nullam a ultrices nibh. Nullam non sapien in est rutrum pharetra.
        stibulum id varius nisi. Donec eget viverra lorem, et mattis
        lectus. Nulla viverra porta diam vel dapibus. Vestibulum placerat
        ttis justo eget vehicula. Vestibulum quis massa orci. Fusce in
        venenatis sapien.`,
      ],
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Photoshop and Illustrator</h1>
        <div className="PsAiwrapper clearfix">
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[0]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[0]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>{this.state.titles[0]}</h2>
            <p>{this.state.text[0]}</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[1]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[1]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>{this.state.titles[1]}</h2>
            <p>{this.state.text[1]}</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[2]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[2]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>{this.state.titles[2]}</h2>
            <p>{this.state.text[2]}</p>
          </div>
          <div className={this.state.classes}>
            <div
              className="projectimage"
              style={{ backgroundImage: `url(${this.state.images[3]})` }}
              onClick={() => { this.props.setModal(this.state.imgpropsnames[3]); }}
              onKeyDown={() => { this.props.setModal(); }}
              role="button"
              tabIndex="0"
            />
            <h2>{this.state.titles[3]}</h2>
            <p>{this.state.text[3]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PsAi;
