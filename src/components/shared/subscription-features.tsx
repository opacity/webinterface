import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, SUBSCRIPTION_DESKTOP_WIDTH } from "../../config";

const FEATURES = require("../../assets/images/features.svg");

const Container = styled.div`
  height: 215px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    height: 100%;
  }
`;

const MoreInfoTablet = styled.div``;

const MoreInfoContainer = styled.div`
  div:nth-child(2) {
    display: none;
  }
`;

const MoreInfo = styled.div`
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    display: none;
  }
`;

const MoreFeatures = styled.div`
  display: none;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
  color: ${props => props.theme.button.background};
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    display: flex;
  }
`;

const Features = styled.img`
  width: 14px;
  height: 14px;
  display: inline-block;
  margin-right: 10px;
`;

const Feature = styled.p`
  text-align: center;
  font-size: 15px;
  margin: 10px 20px;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.container.content};
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    margin: 10 50px;
  }
`;

const SubscriptionFeatures = ({ features }) => {
  const [open, setOpen] = useState(false);

  const featuresList = features.map((feature, key) => (
    <Feature key={key}>{feature}</Feature>
  ));

  return (
    <ThemeProvider theme={theme}>
      <Container>
        {!open && (
          <MoreFeatures onClick={() => setOpen(true)}>
            <Features src={FEATURES} alt="logo" />
            Show features
          </MoreFeatures>
        )}
        <MoreInfoContainer>
          {open && <MoreInfoTablet>{featuresList}</MoreInfoTablet>}
          <MoreInfo>{featuresList}</MoreInfo>
        </MoreInfoContainer>
      </Container>
    </ThemeProvider>
  );
};

export default SubscriptionFeatures;
