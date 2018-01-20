import React, { Component } from 'react';
import Iartposter from '../../img/posterD3-2.jpg';
import Spaceroom from '../../img/Spaceroom.jpg';
import '../../css/PsAi.css';

class PsAi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Iartposter, Spaceroom],
      titles: ['iARTmix poster', 'Defining space'],
      classes: 'projectWrapper col-xs-12 col-sm-12 col-md-3 col-lg-3',
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
      ],
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Photoshop and Illustrator</h1>
        <div className="PsAiwrapper col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className={this.state.classes}>
            <div className="projectimage" style={{ backgroundImage: `url(${this.state.images[0]})` }} />
            <h2>{this.state.titles[0]}</h2>
            <p>{this.state.text[0]}</p>
          </div>
          <div className={this.state.classes}>
            <div className="projectimage" style={{ backgroundImage: `url(${this.state.images[1]})` }} />
            <h2>{this.state.titles[1]}</h2>
            <p>{this.state.text[1]}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PsAi;
