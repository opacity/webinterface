import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

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
  cursor: pointer;
  text-align: center;
  margin: auto;
  border: none;

  &:disabled {
    background-color: #dfdfdf;
    color: #4f5e78;
    border: 1px solid #4f5e78;
  }
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

const subscriptionList = [
  {
    title: "Basic",
    isAvailable: true,
    content:
      "Secure, encrypted storage solution perfect for the needs of the individual",
    price: "2 OPQ / year",
    plan: "128 GB",
    button: "SIGN UP",
    features: [
      {
        title: "Encrypted storage"
      },
      {
        title: "Unlimited downloads"
      },
      {
        title: "No personal information required"
      }
    ]
  },
  {
    title: "Professional",
    isAvailable: false,
    content:
      "For professionals looking for a secure, easily accessible storage solution while on the move.",
    price: "16 OPQ / year",
    plan: "1 TB",
    button: "COMING SOON",
    features: [
      {
        title: "Encrypted storage"
      },
      {
        title: "Unlimited downloads"
      },
      {
        title: "No personal information required"
      }
    ]
  },
  {
    title: "Business",
    isAvailable: false,
    content:
      "A secure, encrypted storage solution for growing businesses. Perfect for small teams.",
    price: "32 OPQ / year",
    plan: "2 TB",
    button: "COMING SOON",
    features: [
      {
        title: "Encrypted storage"
      },
      {
        title: "Unlimited downloads"
      },
      {
        title: "No personal information required"
      }
    ]
  }
];

const Subscription = () => (
  <ThemeProvider theme={theme}>
    <Container>
      {_.map(subscriptionList, item => (
        <Column key={_.random(true)}>
          <Header>
            <Title>{item.title}</Title>
            <Line />
            <Content>{item.content}</Content>
            <SubscriptionFeatures features={item.features} />
          </Header>
          <Footer>
            <Price>{item.price}</Price>
            <Plan>{item.plan}</Plan>
            {item.button && (
              <ButtonWrapper>
                <Button
                  disabled={!item.isAvailable}
                  onClick={() => window.open("/sign-up", "_self")}
                >
                  {item.button}
                </Button>
              </ButtonWrapper>
            )}
          </Footer>
        </Column>
      ))}
    </Container>
  </ThemeProvider>
);

export default Subscription;
