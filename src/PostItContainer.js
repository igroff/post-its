import React, { Component } from 'react';
import styled from 'styled-components';
import PostIt from './PostIt';

const Root = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  color: red;
`;


class PostItContainer extends Component {
  render() {
    return (
      <Root>
        {
        this.props.postIts.map( postItData =>
          <PostIt {...postItData}/>
        )
        }
      </Root>
    );
  }
}

export default PostItContainer;
