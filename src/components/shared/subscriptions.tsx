import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
  SUBSCRIPTION_DESKTOP_WIDTH,
  SHADOW,
  PLANS,
  MOBILE_WIDTH,
  theme
} from "../../config";

import SubscriptionFeatures from "./subscription-features";
import InsideLink from "../shared/inside-link";

const FEATURED_BANNER = require("../../assets/images/featured.svg");

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0 20px 0;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    flex-direction: column;
  }
`;

const Reminder = styled.p`
  text-align: center;
  font-size: 11px;
  color: grey;
`;

interface IColumnProps {
  shadow: SHADOW;
  isHighlighted?: boolean;
  zIndex: number;
  borderColor: string;
}

const Column = styled.div<IColumnProps>`
  min-width: ${props => (props.isHighlighted ? 275 : 225)}px;
  min-height: ${props => (props.isHighlighted ? 725 : 680)}px;
  z-index: ${props => props.zIndex};
  border-top: 3px solid ${props => props.borderColor};
  position: relative;
  box-shadow: ${props => {
    switch (props.shadow) {
      case SHADOW.LEFT:
        return "-6px 8px 16px -3px rgba(172, 176, 181, 1)";
      case SHADOW.RIGHT:
        return "6px 8px 16px -3px rgba(172, 176, 181, 1)";
      default:
        return "0px 8px 16px 4px rgba(172,176,181,1);";
    }
  }};
  background-color: #ffffff;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: 325px;
    margin: 20px 0;
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

const PaymentOption = styled.div`
  display: flex;
  flex-direction: column;
  justify: center;
  align-items: center;
`;

const Duration = styled.h5`
  margin: 0;
  font-weight: normal;
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
  font-size: 27px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  margin: 0;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin-top: 60px;
  }
`;

const StorageLimit = styled.p`
  font-size: 27px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin-top: 0;
  }
`;

const Content = styled.p`
  text-align: center;
  margin: 20px;
  height: 60px;
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    width: 171px;
    width: auto;
    margin: 10px;
    height: 50px;
  }
`;

const FeaturedIcon = styled.img.attrs({
  src: FEATURED_BANNER
})`
  width: 70px;
  height: 70px;
  position: absolute;
  top: -8px;
  right: -6px;
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
  min-height: 50px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    margin: 20px 20px 40px 20px;
  }
`;

const PriceSection = styled.div`
  height: 135px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    height: 125px;
  }
`;

const Header = styled.div``;

const Footer = styled.div``;

const Subscriptions = () => (
  <ThemeProvider theme={theme}>
    <Container>
      {_.map(PLANS, plan => (
        <Column
          key={plan.permalink}
          shadow={plan.shadow}
          zIndex={plan.zIndex}
          isHighlighted={plan.isHighlighted}
          borderColor={plan.borderColor}
        >
          {plan.isHighlighted && <FeaturedIcon />}
          <Header>
            <Title>{plan.title}</Title>
            <Line />
            <Content>{plan.content}</Content>
            <StorageLimit>{plan.storageLimit}</StorageLimit>
            <SubscriptionFeatures features={plan.features} />
          </Header>
          <Footer>
            <PriceSection>
              <PaymentOption>
                <Price>{plan.cost} OPQ</Price>
                <Duration>per year</Duration>
              </PaymentOption>
              {plan.usdCost > 0 && (
                <React.Fragment>
                  <Reminder>&ndash; or &ndash;</Reminder>
                  <PaymentOption>
                    <Price>${plan.usdCost}</Price>
                    <Duration>per year</Duration>
                  </PaymentOption>
                </React.Fragment>
              )}
            </PriceSection>
            <ButtonWrapper>
              {plan.isAvailable ? (
                <SignupLink to={`/sign-up/${plan.permalink}`}>
                  {plan.isAvailable ? "Choose plan" : "Contact Us"}
                </SignupLink>
              ) : (
                <InsideLink href="mailto:jason@opacity.io">
                  Contact Us
                </InsideLink>
              )}
            </ButtonWrapper>
          </Footer>
        </Column>
      ))}
    </Container>
  </ThemeProvider>
);

export default Subscriptions;
