import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import Header from './Header';
import Modal from './Modal';
import Webdevpro from './webdevAndprogrammingLink/Webdevpro';
import Home from './homepage/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      img4modal: '',
    };
    this.setModal = this.setModal.bind(this);
  }

  setModal(image) {
    const imageName = image;
    const modal = document.getElementsByClassName('modalOverlay');
    if (this.state.modal === false) {
      modal[0].style.display = 'block';
      this.setState({
        modal: true,
        img4modal: imageName,
      });
    } else {
      modal[0].style.display = 'none';
      this.setState({
        modal: false,
      });
    }
  }

  render() {
    return (
      <div className="wrapper">
        <Modal
          imageUri={this.state.img4modal}
          setModal={this.setModal}
        />
        <Header />
        <main>
          <Switch>
            <Route
              exact
              path="/Webdevpro"
              render={() => <Webdevpro setModal={this.setModal} />
              }
            />
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
