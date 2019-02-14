import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../../config";

const ProgressBorder = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${props => props.theme.container.background};
  height: 48px;
  max-width: 450px;
`;

const InnerBar = styled.div`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: ${props => props.theme.title.color};
`;

const ProgressBar = ({ progress }) => (
  <ThemeProvider theme={theme}>
    <ProgressBorder className="progress">
      <InnerBar
        progress={progress}
        aria-valuenow={progress}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </ProgressBorder>
  </ThemeProvider>
);

export default ProgressBar;
