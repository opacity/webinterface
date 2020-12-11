import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";

import { FRONT_END_URL, MOBILE_WIDTH, theme } from "../../config";

import ClipboardWidget from "../shared/clipboard-widget";
import PublicClipboardWidget from "../shared/public-clipboard-widget";

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 290px;
  }
`;

const StyledModal = Modal.styled`
  background-color: white;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 20px;
  color: ${props => props.theme.title.color};
  text-align: center;
  display: inline;
`;

const Filename = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
`;

const CloseButton = styled.div`
  position: relative;
  right: -356px;
  top: -70px;
  width: 32px;
  height: 32px;
  opacity: 0.8;
  display: inline;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  @media (max-width: ${MOBILE_WIDTH}px) {
    right: -270px;
  }
`;

const ShareModal = ({ close, isOpen, file }) => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={() => close()}
        onEscapeKeydown={() => close()}
      >
        <Body>
          <Title>Share your file with others</Title>
          <CloseButton onClick={() => close()} />
          <Filename>{file && file.filename}</Filename>
          <ClipboardWidget
            text={`${FRONT_END_URL}/share#handle=${file && file.handle}`}
            property="URL"
            title="Anyone with this link can view the file"
            align="center"
          />

          <PublicClipboardWidget
            text={`${FRONT_END_URL}/public/${file && file.handle}`}
            title="This File Is Visible To Anyone On The Web"
            isPublicFile={false}
          />
        </Body>
      </StyledModal>
    </ModalProvider>
  </ThemeProvider>
);

export default ShareModal;
