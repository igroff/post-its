import React, { Component } from 'react';
import styled from 'styled-components';

const PostItRoot = styled.div`
  border: 1px;
  border-style: solid;
  font-family: Arial;
  position: absolute;
  height: 200px;
  width: 300px;
  background-color: #FFFFA5;
  left: ${props => props.xPos}px;
  top: ${props => props.yPos}px;
`;

class PostIt extends Component {
  render() {
    const { x, y, text } = this.props;
    return (
      <PostItRoot xPos={x} yPos={y}>
        <i>{text}</i>
      </PostItRoot>
    );
  }
}

export default PostIt;
