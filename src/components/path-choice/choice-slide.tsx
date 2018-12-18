import React from "react";
import styled from "styled-components";

import { Button, Slide, Instructions } from "../shared";

const ArrowContainer = styled.div`
  margin: auto;
  text-align: center;
  padding-bottom: 10px;
`;

const ArrowUpTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid white;
  margin: auto;
  text-align: center;
  display: block;
`;

const ArrowDownTriangle = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid white;
  margin: auto;
  text-align: center;
  display: block;
`;

const ArrowLine = styled.div`
  width: 4.5px;
  height: 20px;
  display: inline-block;
  background-color: white;
  position: relative;
`;

const ArrowLineDown = styled(ArrowLine)`
  top: 5px;
`;

const ArrowLineUp = styled(ArrowLine)`
  top: -2px;
`;

const LineSmall = styled.div`
  width: 11px;
  height: 2px;
  background-color: #2e3854;
  display: inline-block;
  position: relative;
  top: -10px;
`;

const LineSmallUp = styled(LineSmall)`
  top: -5px;
`;

const LineSpace = styled.div`
  width: 5px;
  background-color: transparent;
  display: inline-block;
`;

const Line = styled.div`
  margin: auto;
  text-align: center;
  width: 30px;
  height: 2.2px;
  background-color: #2e3854;
  display: block;
`;

const ChoiceSlide = ({ visitUploadFormFn, visitDownloadFormFn }) => (
  <Slide title="Opacity Storage">
    <Instructions>
      Welcome to Opacity Storage. Please select one of the options provided
      below.
    </Instructions>
    <Button
      id="upload-btn"
      backgroundColor="#846b99"
      onClick={visitUploadFormFn}
    >
      <ArrowContainer>
        <ArrowUpTriangle />
        <LineSmallUp />
        <LineSpace />
        <ArrowLineUp />
        <LineSpace />
        <LineSmallUp />
        <Line />
      </ArrowContainer>
      Upload a File
    </Button>
    <Button
      id="download-btn"
      backgroundColor="#605c8e"
      position="relative"
      top="-10px"
      onClick={visitDownloadFormFn}
    >
      <ArrowContainer>
        <Line />
        <LineSmall />
        <LineSpace />
        <ArrowLineDown />
        <LineSpace />
        <LineSmall />
        <ArrowDownTriangle />
      </ArrowContainer>
      Retrieve a File
    </Button>
  </Slide>
);

export default ChoiceSlide;
