import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";

import { MOBILE_WIDTH, theme } from "../../config";

const ICON_CHECK = require("../../assets/images/checkmark.svg");

const StyledModal = Modal.styled`
  background-color: white;
  padding: 20px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px 54px 54px 54px;
  }
`;

const FadingBackground = styled(BaseModalBackground)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    background-color: white;
  }
`;

const Title = styled.h1`
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  margin: auto;
  margin: 35px 0 20px 0;
`;

const Content = styled.p`
  width: auto;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
`;

const ContentNoMargin = styled(Content)`
  margin: 0px;
  padding: 0px;
`;

const ContentColor = styled(ContentNoMargin)`
  color: ${props => props.theme.title.color};
`;

const Button = styled.button`
  width: 171px;
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
  margin: auto;
  border: none;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  text-align: left;
`;

const Icon = styled.img`
  height: 100px;
  width: 100px;
`;

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const RecoveryModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider backgroundComponent={FadingBackground}>
        <StyledModal
          isOpen={isOpen}
          onBackgroundClick={() => setIsOpen(!isOpen)}
          onEscapeKeydown={() => setIsOpen(!isOpen)}
        >
          <Title>Storage handle successfully recovered.</Title>
          <IconWrapper>
            <Icon src={ICON_CHECK} />
          </IconWrapper>
          <Content>
            Your storage handle has been successfully recovered and you are now
            logged into your Opacity storage account.
          </Content>
          <ContentNoMargin>Your recovered storage handle is:</ContentNoMargin>
          <ContentColor>test123-345463879452359784365345</ContentColor>
          <Content>
            Don’t forget to record your storage handle, as it will be required
            to log into your account .
          </Content>
          <ButtonWrapper>
            <Button onClick={() => setIsOpen(!isOpen)}>Close window</Button>
          </ButtonWrapper>
        </StyledModal>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default RecoveryModal;
