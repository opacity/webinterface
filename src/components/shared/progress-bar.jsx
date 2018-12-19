import React from "react";
import styled from "styled-components";

const ProgressBorder = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: #232b40;
  border-radius: 0px;
  height: 48px;
  max-width: 378px;
`;

const ProgressBar = ({ progress, backgroundColor }) => (
  <ProgressBorder className="progress">
    <div
      className="progress-bar"
      role="progressbar"
      style={{
        backgroundColor: backgroundColor,
        width: `${progress}%`,
        height: `100%`
      }}
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    />
  </ProgressBorder>
);

export default ProgressBar;
