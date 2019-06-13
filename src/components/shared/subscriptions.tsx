import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
  SUBSCRIPTION_DESKTOP_WIDTH,
  PLANS,
  MOBILE_WIDTH,
  theme
} from "../../config";

import SubscriptionFeatures from "./subscription-features";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 0 20px 0;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    flex-direction: column;
  }
`;

const Column = styled.div`
  width: 100%;
  height: 491px;
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
    height: auto;
    display: flex;
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
  width: 200px;
  min-height: 0px;
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  margin: auto;
  margin-top: 18px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin-top: 60px;
  }
`;

const Plan = styled.p`
  width: 200px;
  min-height: 0px;
  font-size: ${props => props.theme.container.title.size}px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  margin: auto;
  margin-top: 10px;
`;

const Content = styled.p`
  width: 232px;
  min-height: 70px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  margin: 15px 15px 0 37px;
  height: 50px;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: 171px;
    width: auto;
    margin: 0 30px 0 30px;
    height: 100px;
  }
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 15px 30px 15px 20px;
    width: 250px;
  }
`;

interface SignupLinkProps {
  disabled: boolean;
}

const SignupLink = styled(Link)`
  align-items: center;
  background-color: ${props => props.theme.button.background};
  border: none;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: bold;
  height: 40px;
  justify-content: center;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin: auto;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 171px;
  ${(props: SignupLinkProps) =>
    props.disabled &&
    `
    pointer-events: none;
    cursor: default;
    background-color: #dfdfdf;
    color: #4f5e78;
    border: 1px solid #4f5e78;
  `};
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 20px 0 40px 0;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    margin: 20px 20px 40px 20px;
  }
`;

const Header = styled.div``;

const Footer = styled.div`
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin-left: 100px;
  }
`;

const Subscriptions = () => (
  <ThemeProvider theme={theme}>
    <Container>
      {_.map(PLANS, plan => (
        <Column key={plan.permalink}>
          <Header>
            <Title>{plan.title}</Title>
            <Line />
            <Content>{plan.content}</Content>
            <SubscriptionFeatures features={plan.features} />
          </Header>
          <Footer>
            <Price>{plan.price}</Price>
            <Plan>{plan.storageLimit}</Plan>
            <ButtonWrapper>
              <SignupLink
                disabled={!plan.isAvailable}
                to={`sign-up/${plan.permalink}`}
              >
                {plan.isAvailable ? "Sign up" : "Coming soon"}
              </SignupLink>
            </ButtonWrapper>
          </Footer>
        </Column>
      ))}
    </Container>
  </ThemeProvider>
);

export default Subscriptions;
