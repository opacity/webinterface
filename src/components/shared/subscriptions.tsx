import _ from "lodash";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

import {
  SUBSCRIPTION_DESKTOP_WIDTH,
  SHADOW,
  PLANS,
  PlanType,
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
  height: ${props => (props.isHighlighted ? 725 : 696)}px;
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
    border-bottom: 1px solid #8faacc;
    box-shadow: 0px 10px 27px -15px rgba(0, 0, 0, 0.75);
    height: 100%;
    margin: 20px 0;
    width: 325px;
    &:last-child {
      border-bottom: none;
    }
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
  text-align: center;
  margin-top: 35px;
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
`;

const Price = styled.p`
  width: 187px;
  font-size: 27px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  text-align: center;
  margin: 0;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    margin-top: 10px;
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
    height: 155px;
  }
`;

const Strikethrough = styled.span`
  color: #d7deed;
  margin-right: 5px;
  text-decoration: line-through;
  font-size: 23px;
`;

const DisclaimerWrapper = styled.div`
  bottom: 5px;
  left: 15px;
  position: absolute;
`;

const Disclaimer = styled.p`
  color: #4f5e78;
  bottom: 5px;
  font-size: 12px;
  margin: 5px 0;
`;

const Header = styled.div``;

const Footer = styled.div``;

type SubscriptionsProps = {
  isCustom: boolean
  isUpgrade?: boolean
  filter?: (plan: PlanType) => boolean
  select?: (plan: PlanType) => string
  next?: (plan: PlanType) => void
};

const Subscriptions = ({
  isCustom,
  isUpgrade,
  filter = () => true,
  select = plan => `/${isCustom ? "custom-" : ""}${isUpgrade ? "upgrade" : "sign-up"}/${plan.permalink}`,
  next = () => {}
}: SubscriptionsProps) => {
  const plans = PLANS.filter(p => p.isCustom === !!isCustom).filter(filter);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {_.map(plans, plan => (
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
                {plan.opctCost > 0 && (
                  <PaymentOption>
                    <Price>{plan.opctCost.toLocaleString()} OPCT</Price>
                    <Duration>per year</Duration>
                  </PaymentOption>
                )}
                {plan.usdCost > 0 && (
                  <React.Fragment>
                    <Reminder>&ndash; or &ndash;</Reminder>
                    <PaymentOption>
                      {plan.discountedUsdCost ? (
                        <Price>
                          <Strikethrough>${plan.usdCost}</Strikethrough>
                          ${plan.discountedUsdCost}**
                        </Price>
                      ) : (
                        <Price>${plan.usdCost}</Price>
                      )}
                      <Duration>per year</Duration>
                    </PaymentOption>
                  </React.Fragment>
                )}
                {plan.usdCost === 0 &&
                  plan.opctCost === 0 && (
                    <React.Fragment>
                      <PaymentOption>
                        <Price>{plan.specialPricing}</Price>
                      </PaymentOption>
                    </React.Fragment>
                  )}
              </PriceSection>
              <ButtonWrapper>
                {plan.isAvailable ? (
                  <SignupLink
                    to={select(plan)}
                    onClick={() => { next(plan); }}
                  >
                    {plan.isAvailable ? "Choose plan" : "Contact Us"}
                  </SignupLink>
                ) : (
                  <InsideLink href="mailto:sales@opacity.io">
                    Contact Us
                  </InsideLink>
                )}
              </ButtonWrapper>
            </Footer>
            <DisclaimerWrapper>
              {plan.includesDesktopApp && (
                <Disclaimer>* With Desktop App</Disclaimer>
              )}
              {plan.discountedUsdCost && (
                <Disclaimer>** Limited Time Discount</Disclaimer>
              )}
            </DisclaimerWrapper>
          </Column>
        ))}
      </Container>
    </ThemeProvider>
  );
};

export default Subscriptions;
