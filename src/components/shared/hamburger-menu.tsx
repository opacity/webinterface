import React from "react";
import styled, { ThemeProvider } from "styled-components";
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
  padding-right: 10px;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  width: 22px;
  height: 22px;
`;

const HamburgerMenu = ({ close, isOpen, children }) => (
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
        <LinkContainer>{children}</LinkContainer>
      </MobileNavigation>
    </Modal>
  </ThemeProvider>
);

export default HamburgerMenu;
