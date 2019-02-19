import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, DESKTOP_WIDTH } from "../../config";

import ScreenContainer from "../shared/screen-container";

const Title = styled.h1`
  color: ${props => props.theme.title.color};
  font-size: ${props => props.theme.container.title.size}px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: bold;
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
  width: 80%;
`;

const Hr = styled.div`
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
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
  margin: 0 30px;
  padding: 30px 30px 0 30px;
  width: auto;
`;

const ContentBold = styled(Content)`
  font-weight: bold;
  min-height: 28px;
`;

const Link = styled(Content)`
  color: ${props => props.theme.link.color};
`;

const Button = styled.button`
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: bold;
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
  margin: 20px 0 40px 0;
  padding-bottom: 40px;
  padding-right: 60px;
  text-align: right;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px)
    text-align: center;
    margin: 40px;
    padding: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-rows: repeat(4, 28px);
  margin: 20px 60px 0px 60px;
  @media only screen and (max-width: ${DESKTOP_WIDTH}px) {
    grid-template-rows: repeat(6, 28px);
  }
`;

const Box = styled.div`
  align-items: center;
  background-color: ${props => props.theme.input.background};
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
        <Link>Download phrase as CSV</Link>
        <ButtonWrapper>
          <Button>Continue</Button>
        </ButtonWrapper>
      </ContentBox>
    </ScreenContainer>
  </ThemeProvider>
);

export default RecordRecoveryPhaseSlide;
