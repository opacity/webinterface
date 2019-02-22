import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { theme, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";

import ScreenContainer from "../shared/screen-container";

const ICON_CLIPBOARD = require("../../assets/images/icon_clipboard.svg");

const Title = styled.h1`
  color: ${props => props.theme.title.color};
  font-size: ${props => props.theme.container.title.size}px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: 600;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin-top: 35px;
  margin: auto;
  padding-top: 30px;
  text-align: center;
`;

const ContentBox = styled.div`
  background-color: ${props => props.theme.container.background};
  margin: auto;
  max-width: 452px;
  padding: 20px 120px;
  width: 100%;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 20px;
    width: auto;
  }
`;

const Hr = styled.div`
  width: ${props => props.theme.container.title.underline.width}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Content = styled.p`
  margin-top: 25px;
  width: auto;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
`;

const ContentBold = styled(Content)`
  margin-top: 25px;
  font-weight: bold;
  min-height: 28px;
`;

const ContinueButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  height: 40px;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin: auto;
  text-align: center;
  width: 171px;

  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  text-align: right;
  margin: 25px 0;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
  }
`;

const InputWrapper = styled.div`
  margin-top: 25px;
  display: flex;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;
const InputColumnWrapper = styled.div`
  flex: 50%;
`;

const Input = styled.input.attrs({
  type: "text"
})`
  border: 1px solid ${props => props.theme.input.border.color};
  width: 80%;
  padding: 10px;
  background: transparent;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 90%;
  }
`;

const Label = styled.h3`
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.label.color};
`;

const HandleWrapper = styled.div`
  display: flex;
  background-color: ${props => props.theme.password.background};
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const Handle = styled.span`
  color: white;
  font-size: 12px;
`;

const ClipboardIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const RecordRecoveryPhaseSlide = ({ handle }) => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <ContentBox>
        <Title>Record Storage Handle and PIN</Title>
        <Hr />
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
          vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
          tristique ac magna sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Ut ac massa vestibulum, vestibulum nunc in, imperdiet
        </Content>
        <ContentBold>
          Phaugue. Phasellus nisl est, tristique ac magna sed:
        </ContentBold>
        <Label>Storage Handle</Label>
        <HandleWrapper>
          <Handle>{handle}</Handle>
          <CopyToClipboard text={handle}>
            <ClipboardIcon src={ICON_CLIPBOARD} />
          </CopyToClipboard>
        </HandleWrapper>
        <InputWrapper>
          <InputColumnWrapper>
            <Label>Choose Storage PIN</Label>
            <Input />
          </InputColumnWrapper>
          <InputColumnWrapper>
            <Label>Re-Type Storage PIN</Label>
            <Input />
          </InputColumnWrapper>
        </InputWrapper>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
          vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
          tristique ac magna sed.
        </Content>
        <ButtonWrapper>
          <ContinueButton>Continue</ContinueButton>
        </ButtonWrapper>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RecordRecoveryPhaseSlide;
