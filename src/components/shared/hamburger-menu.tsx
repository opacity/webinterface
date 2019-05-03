import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

import { theme, MOBILE_WIDTH } from "../../config";

const ICON_CLOSE = require("../../assets/images/close.svg");

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;
  }
`;

const MobileNavigationContainer = styled.div`
  @media only screen and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.header.background};
  top: 60px;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  z-index: 1000;
`;

const Link = styled.a`
  margin-right: 95px;
  align-items: center;
  color: ${props => props.theme.header.color};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

const LinkNavigation = styled(Link)`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    font-size: 20px;
    margin: 25px;
  }
`;

const CloseIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const HamburgerMenu = ({ history, close }) => (
  <ThemeProvider theme={theme}>
    <MobileNavigationContainer>
      <CloseIcon src={ICON_CLOSE} alt="close" onClick={close} />
      <MobileNavigation>
        <LinkContainer>
          <LinkNavigation onClick={() => history.push("/stands-out")}>
            STANDS OUT
          </LinkNavigation>
          <LinkNavigation onClick={() => history.push("/team-page")}>
            TEAM
          </LinkNavigation>

          <LinkNavigation
            href="https://medium.com/opacity-storage/"
            target="_blank"
          >
            BLOG
          </LinkNavigation>
        </LinkContainer>
      </MobileNavigation>
    </MobileNavigationContainer>
  </ThemeProvider>
);

export default withRouter(HamburgerMenu);
