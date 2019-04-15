import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { MOBILE_WIDTH, theme } from "../../config";

const ICON_CHECK = require("../../assets/images/checkmark.svg");

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

const Container = styled.div`
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2),
    0 3px 15px 2.5px rgba(0, 0, 0, 0.12), 0 8px 12px 1px rgba(0, 0, 0, 0.14);
  position: fixed;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 100px);
  z-index: 2000;
  min-width: 400px;
  background-color: white;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
  padding: 20px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    position: fixed;
    box-shadow: none;
    padding: 0px 54px 54px 54px;
    width: auto;
    height: 100%;
    top: 0;
  }
`;

const Icon = styled.img`
  height: 100px;
  width: 100px;
`;

const IconWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const RecoveryModal = () => (
  <ThemeProvider theme={theme}>
    <Container>
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
        Don’t forget to record your storage handle, as it will be required to
        log into your account .
      </Content>
      <ButtonWrapper>
        <Button>Close window</Button>
      </ButtonWrapper>
    </Container>
  </ThemeProvider>
);

export default RecoveryModal;
