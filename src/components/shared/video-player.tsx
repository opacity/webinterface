import React from "react";
import styled from "styled-components";
import { Player } from "video-react";

import { MOBILE_WIDTH } from "../../config";

import "video-react/dist/video-react.css";

const POSTER = require("../../assets/images/landing-page-video-poster.png");

const Container = styled.div`
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    max-width: 100%;
  }
`;

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer = ({ src }: VideoPlayerProps) => (
  <Container>
    <Player playsInline={true} autoPlay={true} src={src} poster={POSTER} preload="auto" />
  </Container>
);

export default VideoPlayer;
