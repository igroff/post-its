import React, { Component } from 'react';
import logo from './logo.svg';
import PostIt from './PostIt';
import PostItContainer from './PostItContainer';
import './App.css';
import * as firebase from 'firebase';


class App extends Component {
  state = {postIts: []}
  fbSnapshotHandler = (snapShot) => {
    const mungedArray = snapShot.val().map( (item, key) => ({
      ...item, key
    }))
    this.setState({postIts: mungedArray});
  }  
  componentDidMount() {
    firebase.database().ref('/postits/aHR0cHM6Ly9naXRodWIuY29tL29yZ3MvZ2xnL3RlYW1zL2JhY2tvZmZpY2UtYmFycmFrcw==').on('value', this.fbSnapshotHandler);
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Sandwich</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PostItContainer postIts={this.state.postIts}>
        </PostItContainer>
      </div>
    );
  }
}

export default App;
