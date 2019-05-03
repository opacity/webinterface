import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";
import Modal from "react-modal";

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

const MobileNavigation = styled.div`
  background-color: ${props => props.theme.header.background};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
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

const HamburgerMenu = ({ history, close, isOpen }) => (
  <ThemeProvider theme={theme}>
    <Modal
      isOpen={isOpen}
      style={{
        overlay: {
          backgroundColor: theme.header.background,
          zIndex: 1000
        },
        content: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.header.background
        }
      }}
    >
      <IconWrapper>
        <CloseIcon src={ICON_CLOSE} alt="close" onClick={close} />
      </IconWrapper>
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
    </Modal>
  </ThemeProvider>
);

export default withRouter(HamburgerMenu);
