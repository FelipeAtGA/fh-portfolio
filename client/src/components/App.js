import React, { Component } from "react";
import { Route, Switch } from "react-router";
import Header from "./Header";
import Modal from "./Modal";
import Webdevpro from "./Webdevpro";
import Home from "./Home";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      modal: false,
    }
    this.setModal = this.setModal.bind(this);
  }

  setModal(event) {
    let modal = document.getElementsByClassName("modalOverlay");
    if (this.state.modal === false) {
      modal[0].style.display="block";
      this.setState({
        modal: true,
      })
    }else{
      modal[0].style.display="none";
      this.setState({
        modal: false,
      })
    }
  }

  render() {
    console.log(this.state.type);
    return (
      <div className='wrapper'>
        <Header />
        <main>
          <Switch>
            <Route exact path="/Webdevpro"
              render={ () => <Webdevpro setModal={ this.setModal } /> }
            />
            <Route exact path="/" component={ Home }/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
