import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH } from "../../config";

import ScreenContainer from "../shared/screen-container";

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
  max-width: 752px;
  padding: 20px 120px;
  width: 100%;
`;

const Hr = styled.div`
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 30px;
  width: 40px;
`;

const Content = styled.p`
  color: ${props => props.theme.container.content};
  font-size: 12px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: ${props => props.theme.fontWeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  width: auto;
`;

const ContentBold = styled(Content)`
  font-weight: bold;
  min-height: 28px;
`;

const DownloadButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  color: ${props => props.theme.link.color};
`;

const ContinueButton = styled.button`
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

const Grid = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-gap: 20px;
  grid-template-rows: repeat(4, 28px);
  margin-bottom: 30px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    grid-template-rows: repeat(6, 28px);
  }
`;

const Box = styled.div`
  align-items: center;
  background-color: ${props => props.theme.password.background};
  color: #ffffff;
  display: flex;
  font-size: 12px;
  justify-content: center;
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
        <Grid>
          <Box>1. Massa</Box>
          <Box>2. Massa</Box>
          <Box>3. Massa</Box>
          <Box>4. Massa</Box>
          <Box>5. Massa</Box>
          <Box>6. Massa</Box>
          <Box>7. Massa</Box>
          <Box>8. Massa</Box>
          <Box>9. Massa</Box>
          <Box>10. Massa</Box>
          <Box>11. Massa</Box>
          <Box>12. Massa</Box>
        </Grid>
        <DownloadButton>Download phrase as CSV</DownloadButton>
        <ButtonWrapper>
          <ContinueButton>Continue</ContinueButton>
        </ButtonWrapper>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RecordRecoveryPhaseSlide;
