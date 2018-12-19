import React from "react";
import styled from "styled-components";

const ProgressBorder = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #232b40;
  height: 48px;
  max-width: 450px;
`;

const InnerBar = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #846b99;
`;

const ProgressBar = ({ progress }) => (
  <ProgressBorder className="progress">
    <InnerBar
      progress={progress}
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </ProgressBorder>
);

export default ProgressBar;
