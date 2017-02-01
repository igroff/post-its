import React, { Component } from 'react';
import PostIt from './PostIt';
import PostItContainer from './PostItContainer';
import './App.css';
import * as firebase from 'firebase';
import styled from 'styled-components';

const PostItOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;
`;

class App extends Component {
  state = {postIts: []}
  fbSnapshotHandler = (snapShot) => {
    const mungedArray = snapShot.val().map( (item, key) => ({
      ...item, key
    }))
    this.setState({postIts: mungedArray});
  }  
  componentDidMount() {
    firebase.database().ref('/postits/' + btoa(window.location.href)).on('value', this.fbSnapshotHandler);
  }
  render() {
    return (
        <PostItOverlay>
          <PostItContainer postIts={this.state.postIts}>
          </PostItContainer>
        </PostItOverlay>
    );
  }
}

export default App;
