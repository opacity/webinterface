import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";

const LeftSideNav = styled.div`
  height: 100%;
  width: 250px;
  background-color: #cfe3fc;
  overflow-x: hidden;
  transition: 0.5s;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 125px;
    display: none;
  }
`;

const StorageInfo = styled.div`
  position: absolute;
  bottom: 34px;
  left: 42px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    left: 10px;
  }
`;

const StorageTitleWrapper = styled.div`
  width: 138px;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 100px;
  }
`;

const StorageTitle = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #687892;
`;

const ProgressBorder = styled.div`
  width: 138px;
  height: 10px;
  background-color: #acc5e3;
  margin: auto;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    width: 100px;
  }
`;

const InnerBar = styled.div<any>`
  width: ${props => props.progress}%;
  height: 100%;
  background-color: #2e6dde;
`;

const ProgressBar = ({ progress, max }) => (
  <ProgressBorder className="progress">
    <InnerBar
      progress={progress}
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax={max}
    />
  </ProgressBorder>
);

const UserPanel = ({ account }) => (
  <ThemeProvider theme={theme}>
    <LeftSideNav>
      <StorageInfo>
        <StorageTitleWrapper>
          <StorageTitle>
            {account.storageUsed}GB / {account.storageLimit}GB USED
          </StorageTitle>
        </StorageTitleWrapper>
        <ProgressBar
          progress={account.storageUsed}
          max={account.storageLimit}
        />
      </StorageInfo>
    </LeftSideNav>
  </ThemeProvider>
);

export default UserPanel;
