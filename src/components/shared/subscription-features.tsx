import _ from "lodash";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH, SUBSCRIPTION_DESKTOP_WIDTH } from "../../config";

const FEATURES = require("../../assets/images/features.svg");

const FeaturesContainer = styled.div``;

const MoreInfoTablet = styled.div``;

const MoreInfoContainer = styled.div`
  div:nth-child(2) {
    display: none;
  }
`;

const MoreInfo = styled.div`
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    display: none;
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

const Item = styled.p`
  display: list-item;
  list-style-type: disc;
  list-style-position: inside;
  width: 260px;
  font-weight: bold;
  font-size: 12.5px;
  min-height: 28px;
  text-transform: uppercase;
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

interface SubscriptionFeaturesProps {
  features;
}

interface SubscriptionFeaturesState {
  open: boolean;
}

class SubscriptionFeatures extends Component<
  SubscriptionFeaturesProps,
  SubscriptionFeaturesState
> {
  state = { open: false };

  openClick() {
    this.setState({ open: true });
  }

  render() {
    const { features } = this.props;
    const { open } = this.state;
    const featuresList = _.map(features, item => (
      <Item key={_.random(true)}>{item.title}</Item>
    ));
    return (
      <ThemeProvider theme={theme}>
        <FeaturesContainer>
          {!open && (
            <MoreFeatures onClick={() => this.openClick()}>
              <Features src={FEATURES} alt="logo" />
              Show features
            </MoreFeatures>
          )}
          <MoreInfoContainer>
            {open && <MoreInfoTablet>{featuresList}</MoreInfoTablet>}
            <MoreInfo>{featuresList}</MoreInfo>
          </MoreInfoContainer>
        </FeaturesContainer>
      </ThemeProvider>
    );
  }
}

export default SubscriptionFeatures;
