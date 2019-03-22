import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

const FEATURES = `/${require("../../assets/images/features.svg")}`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 20px 0;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const Column = styled.div`
  width: 100%;
  height: 451px;
  background-color: ${props => props.theme.container.background};
  padding-top: 15px;
  margin-inline-end: 10px;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: 100%;
    border-bottom: 1px solid #8faacc;
    &:last-child {
      border-bottom: none;
    }
  }
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    max-height: 208px;
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
  text-align: center;
  margin-top: 35px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    margin: 20px 20px 0 20px;
    width: 250px;
    flex: 0.5;
  }
`;

const Line = styled.div`
  width: ${props => props.theme.container.title.underline.width}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 5px 20px 15px 20px;
  }
`;

const Price = styled.p`
  width: 90px;
  min-height: 50px;
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  margin: auto;
  margin-top: 20px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    position: relative;
    top: -120px;
    right: -100px;
  }
`;

const Content = styled.p`
  width: 171px;
  min-height: 70px;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  margin: 15px 15px 0 35px;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: auto;
    margin: 0 30px 0 30px;
  }
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 15px 30px 15px 20px;
    width: 250px;
  }
`;

const ContentBold = styled(Content)`
  font-weight: bold;
  min-height: 28px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
  }
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
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0 40px 0;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    position: relative;
    top: -122px;
    right: -150px;
  }
`;

const MoreFeatures = styled.div`
  display: none;
  width: 150px;
  height: 8.5px;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  color: ${props => props.theme.button.background};
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const Features = styled.img`
  width: 14px;
  height: 14px;
  display: inline-block;
  float: left;
  margin-left: 20px;
  margin-right: 10px;
`;

const Subscription = () => (
  <ThemeProvider theme={theme}>
    <Container>
      <Column>
        <Title>Basic</Title>
        <Line />
        <Content>
          Secure, encrypted storage solution perfect for the needs of the
          individual.
        </Content>
        <ContentBold>100 GB secure storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <ContentBold>Anonymous account</ContentBold>
        <Price>1.56&nbsp;OPQ</Price>
        <MoreFeatures>
          <Features src={FEATURES} alt="logo" />
          Show features
        </MoreFeatures>
        <ButtonWrapper>
          <Button>COMING SOON</Button>
        </ButtonWrapper>
      </Column>
      <Column>
        <Title>Professional</Title>
        <Line />
        <Content>
          For professionals looking for a secure, easily accessible storage
          solution while on the move.
        </Content>
        <ContentBold>1 TB secure storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <ContentBold>Anonymous account</ContentBold>
        <Price>15.625&nbsp;OPQ</Price>
        <MoreFeatures>
          <Features src={FEATURES} alt="logo" />
          Show features
        </MoreFeatures>
        <ButtonWrapper>
          <Button>COMING SOON</Button>
        </ButtonWrapper>
      </Column>
      <Column>
        <Title>Business</Title>
        <Line />
        <Content>
          A secure, encrypted storage solution for growing businesses. Perfect
          for small teams.
        </Content>
        <ContentBold>2 TB secure storage</ContentBold>
        <ContentBold>Unlimited downloads</ContentBold>
        <ContentBold>Anonymous account</ContentBold>
        <Price>31.25&nbsp;OPQ</Price>
        <MoreFeatures>
          <Features src={FEATURES} alt="logo" />
          Show features
        </MoreFeatures>
        <ButtonWrapper>
          <Button>COMING SOON</Button>
        </ButtonWrapper>
      </Column>
    </Container>
  </ThemeProvider>
);

export default Subscription;
