import React, { Component } from 'react';
import Iartposter from '../../img/posterD3-2.jpg';
import '../../css/PsAi.css';

class PsAi extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <hr />
        <h1 className="pageTitle">Photoshop and Illustrator</h1>
        <div className="PsAiwrapper col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div className="poster col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <img src={Iartposter} alt="poster of the iARTmix exhibition" />
            <h2>iARTmix poster</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam a ultrices nibh. Nullam non sapien in est rutrum pharetra.
            stibulum id varius nisi. Donec eget viverra lorem, et mattis
            lectus. Nulla viverra porta diam vel dapibus. Vestibulum placerat
            ttis justo eget vehicula. Vestibulum quis massa orci. Fusce in
            venenatis sapien.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default PsAi;
