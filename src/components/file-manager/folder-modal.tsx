import React, { useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal, { ModalProvider } from "styled-react-modal";

import { MOBILE_WIDTH, theme } from "../../config";

const Body = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 450px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 290px;
  }
`;

const StyledModal = Modal.styled`
  background-color: white;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 22px;
  color: ${props => props.theme.title.color};
  text-align: center;
  display: inline;
`;

const CloseButton = styled.div`
  position: relative;
  left: 427px;
  top: -8px;
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

const SubmitButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${props => props.theme.button.background};
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  text-align: center;
  margin: 0 10px;
  border: none;
  cursor: pointer;
  margin: auto;
  margin-top: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  color: black;
  height: 35px;
  border: 0.5px solid;
  font-size: 16px;
  width: 80%;
  margin: auto;
  padding: 10px;
`;

const FolderModal = ({ close, isOpen, createFolder }) => {
  const folderNameInput = useRef<any>(null);
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={() => close()}
          onEscapeKeydown={() => close()}
        >
          <Body>
            <CloseButton onClick={() => close()} />
            <Title>Enter Folder Name</Title>
            <Input autoFocus={true} type="text" ref={folderNameInput} />
            <SubmitButton
              onClick={() =>
                folderNameInput.current.value.length && [
                  (createFolder(folderNameInput.current.value), close())
                ]
              }
            >
              Add Folder
            </SubmitButton>
          </Body>
        </StyledModal>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default FolderModal;
