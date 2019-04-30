import React from "react";
import styled from "styled-components";
import { Player } from "video-react";

import "video-react/dist/video-react.css";

const Container = styled.div`
  padding: 10px;
  max-width: 500px;
  margin: 0 auto;
`;

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => (
  <Container>
    <Player playsInline autoPlay src={src} preload="auto" />
  </Container>
);

export default VideoPlayer;
