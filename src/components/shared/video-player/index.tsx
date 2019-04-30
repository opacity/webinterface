import React, { Component } from "react";
import styled from "styled-components";
import { Player } from "video-react";

import "video-react/dist/video-react.css";

const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

class VideoPlayer extends Component<any, any> {
  render() {
    console.log(this.props);
    const { src } = this.props;
    return (
      <Container>
        <Player playsInline autoPlay src={src} preload="auto" />
      </Container>
    );
  }
}

export default VideoPlayer;
