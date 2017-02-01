import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const PostItRoot = styled.div`
  border: 1px;
  border-style: solid;
  font-family: Arial;
  position: absolute;
  height: 20px;
  width: 300px;
  background-color: rgba(2555, 255, 165, 0.2);
  left: ${props => props.xPos}px;
  top: ${props => props.yPos}px;
  pointer-events: initial;
  transition: height 1s;
`;

class PostIt extends Component {
  showMe = () => {
    const domElement = ReactDOM.findDOMNode(this.item);
    if ( domElement.style.height === "200px" ){
      domElement.style.height = "20px";
    } else {
      domElement.style.height = "200px";
    }

  }
  receiveDomRef = (item) => {
    console.log(item);
    this.item = item;
  }
  render() {
    const { x, y, text } = this.props;
    return (
      <PostItRoot xPos={x} yPos={y} onClick={this.showMe} ref={this.receiveDomRef}>
        <i>{text}</i>
      </PostItRoot>
    );
  }
}

export default PostIt;
