import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH, MOBILE_WIDTH } from "../../config";

import ClipboardWidget from "../shared/clipboard-widget";
import ScreenContainer from "../shared/screen-container";

const Title = styled.h1`
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  margin: auto;
  text-align: center;
`;

const ContentBox = styled.div`
  margin: auto;
  width: 80%;
  background-color: ${props => props.theme.container.background};
  padding: 80px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
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
  cursor: pointer;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 25px;
  text-align: right;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
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
const InputCollumWrapper = styled.div`
  flex: 50%;
`;

const Input = styled.input`
  border-color: ${props => props.theme.input.border.color};
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
  color: ${props => props.theme.container.content};
  text-transform: uppercase;
`;

const RecordRecoveryPhaseSlide = ({ handle }) => (
  <ThemeProvider theme={theme}>
    <ScreenContainer title={"Register on Opacity"}>
      <ContentBox>
        <Title>Record Recovery Phrase</Title>
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
        <ClipboardWidget
          title="Storage Handle"
          text={handle}
          property="Handle"
        />
        <InputWrapper>
          <InputCollumWrapper>
            <Label>Choose Storage PIN</Label>
            <Input />
          </InputCollumWrapper>
          <InputCollumWrapper>
            <Label>Re-Type Storage PIN</Label>
            <Input />
          </InputCollumWrapper>
        </InputWrapper>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac massa
          vestibulum, vestibulum nunc in, imperdiet augue. Phasellus nisl est,
          tristique ac magna sed.
        </Content>
        <ButtonWrapper>
          <Button>Continue</Button>
        </ButtonWrapper>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RecordRecoveryPhaseSlide;
