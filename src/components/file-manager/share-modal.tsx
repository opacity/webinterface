import React from "react";
import styled, { ThemeProvider } from "styled-components";
// import Modal from "react-modal";
import Modal, { ModalProvider } from "styled-react-modal";

import { FRONT_END_URL, MOBILE_WIDTH, theme } from "../../config";

import ClipboardWidget from "../shared/clipboard-widget";

const Body = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledModal = Modal.styled`
  background-color: white;
  padding: 20px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px 54px 54px 54px;
  }
`;

// const FadingBackground = styled(BaseModalBackground)`
// @media (max-width: ${MOBILE_WIDTH}px) {
// background-color: white;
// }
// `;

// const Title = styled.h3`
// font-size: 20px;
// `;

const Filename = styled.h3`
  font-size: 20px;
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
          <Filename>{file && file.filename}</Filename>
          <ClipboardWidget
            text={`${FRONT_END_URL}/share?handle=${file && file.handle}`}
            property="URL"
            title="Anyone with this link can view the file"
          />
        </Body>
      </StyledModal>
    </ModalProvider>
  </ThemeProvider>
);

export default ShareModal;
