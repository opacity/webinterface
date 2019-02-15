import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH } from "../../config";

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
  margin-top: 35px;
  padding-top: 30px;
`;

const ContentBox = styled.div`
  margin: auto;
  width: 80%;
  background-color: ${props => props.theme.container.background};
`;

const Hr = styled.div`
  width: 40px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
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
  margin: 0 30px 0 30px;
  padding: 30px 30px 0 30px;
`;

const ContentBold = styled(Content)`
  font-weight: bold;
  min-height: 28px;
`;

const Link = styled(Content)`
  color: ${props => props.theme.link.color};
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
  @media (max-width: ${DESKTOP_WIDTH}px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  margin: 20px 0 40px 0;
  padding-right: 60px;
  padding-bottom: 40px;
  text-align: right;
  @media (max-width: ${DESKTOP_WIDTH}px) {
    text-align: center;
    margin: 40px;
    padding: 10px;
  }
`;

const FlexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 60px 0px 60px;
`;

const FlexCol = styled.div`
  width: 33%;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.white};
  margin-inline-end: 10px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
`;

const RecordRecoveryPhaseSlide = () => (
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
        <FlexGrid>
          <FlexCol>1. Massa</FlexCol>
          <FlexCol>1. Massa</FlexCol>
          <FlexCol>1. Massa</FlexCol>
        </FlexGrid>
        <FlexGrid>
          <FlexCol>2. Massa</FlexCol>
          <FlexCol>2. Massa</FlexCol>
          <FlexCol>2. Massa</FlexCol>
        </FlexGrid>
        <FlexGrid>
          <FlexCol>3. Massa</FlexCol>
          <FlexCol>3. Massa</FlexCol>
          <FlexCol>3. Massa</FlexCol>
        </FlexGrid>
        <FlexGrid>
          <FlexCol>4. Massa</FlexCol>
          <FlexCol>4. Massa</FlexCol>
          <FlexCol>4. Massa</FlexCol>
        </FlexGrid>
        <Link>Download phrase as CSV</Link>
        <ButtonWrapper>
          <Button>Continue</Button>
        </ButtonWrapper>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RecordRecoveryPhaseSlide;
