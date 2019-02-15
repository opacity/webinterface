import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { SUBSCRIPTION_DESKTOP_WIDTH, MOBILE_WIDTH, theme } from "../../config";

import ScreenContainer from "../shared/screen-container";

const ICON_LOGO = require("../../assets/images/logo.svg");

const FlexGrid = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 20px 0;
  @media (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const FlexCol = styled.div`
  width: 33%;
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
    max-height: 275px;
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

const Hr = styled.div`
  width: ${props => props.theme.container.title.underline.witdh}px;
  border-top: ${props => props.theme.container.title.underline.height}px solid
    ${props => props.theme.container.title.underline.color};
  margin: auto;
  margin-top: 5px;
  margin-bottom: 15px;
  @media only screen and (max-width: ${SUBSCRIPTION_DESKTOP_WIDTH}px) and (min-width: ${MOBILE_WIDTH}px) {
    margin: 5px 20px 0 20px;
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
    top: -130px;
    right: -150px;
  }
`;

const MoreFeatures = styled.div`
  display: none;
  width: 45px;
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
    display: contents;
  }
`;

const Features = styled.img`
  width: 12px;
  height: 12px;
  display: inline-block;
  float: left;
  margin-left: 20px;
  margin-right: 10px;
  position: relative;
  top: 6px;
`;
const MoreFeatureContainer = styled.div`
  display: block;
`;

const MoreFeatureBasic = ({ style }) => (
  <MoreFeatureContainer style={style}>
    <ContentBold style={style}>
      128 GB secure, decentralized storage
    </ContentBold>
    <ContentBold style={style}>Unlimited downloads</ContentBold>
  </MoreFeatureContainer>
);

const MoreFeatureProfessional = ({ style }) => (
  <MoreFeatureContainer style={style}>
    <ContentBold style={style}>
      512 GB secure, decentralized storage
    </ContentBold>
    <ContentBold style={style}>Unlimited downloads</ContentBold>
  </MoreFeatureContainer>
);

const MoreFeatureBusiness = ({ style }) => (
  <MoreFeatureContainer style={style}>
    <ContentBold style={style}>1 TB secure, decentralized storage</ContentBold>
    <ContentBold style={style}>Unlimited downloads</ContentBold>
  </MoreFeatureContainer>
);

interface State {
  moreFeatureBasic: boolean;
  moreFeatureProfessional: boolean;
  moreFeatureBusiness: boolean;
}

interface Props {}

class SubscriptionSlide extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      moreFeatureBasic: false,
      moreFeatureProfessional: false,
      moreFeatureBusiness: false
    };
  }

  isTabletMode() {
    const width = window.innerWidth;
    console.log(width);
    if (
      width >= parseInt(SUBSCRIPTION_DESKTOP_WIDTH) ||
      width <= parseInt(MOBILE_WIDTH)
    ) {
      return true;
    }
    return false;
  }

  render() {
    const {
      moreFeatureBasic,
      moreFeatureProfessional,
      moreFeatureBusiness
    } = this.state;
    const styleMoreFeatureBasic =
      moreFeatureBasic || this.isTabletMode()
        ? { display: "block" }
        : { display: "none" };
    const styleMoreFeatureProfessional =
      moreFeatureProfessional || this.isTabletMode()
        ? { display: "block" }
        : { display: "none" };
    const styleMoreFeatureBusiness =
      moreFeatureBusiness || this.isTabletMode()
        ? { display: "block" }
        : { display: "none" };
    return (
      <ThemeProvider theme={theme}>
        <ScreenContainer title={"Choose Subscription Plan"}>
          <FlexGrid>
            <FlexCol>
              <Title>Basic</Title>
              <Hr />
              <Content>
                Secure, encrypted storage solution perfect for the needs of the
                individual.
              </Content>
              <MoreFeatures
                onClick={() =>
                  this.setState({
                    moreFeatureBasic: true
                  })
                }
              >
                <Features src={ICON_LOGO} alt="logo" />
                Show features
              </MoreFeatures>
              <MoreFeatureBasic style={styleMoreFeatureBasic} />
              <Price>2 OPQ</Price>
              <ButtonWrapper>
                <Button>CHOOSE PLAN</Button>
              </ButtonWrapper>
            </FlexCol>
            <FlexCol>
              <Title>Professional</Title>
              <Hr />
              <Content>
                For professionals looking for a secure, easily accessible
                storage solution while on the move.
              </Content>
              <MoreFeatures
                onClick={() =>
                  this.setState({
                    moreFeatureProfessional: true
                  })
                }
              >
                <Features src={ICON_LOGO} alt="logo" />
                Show features
              </MoreFeatures>
              <MoreFeatureProfessional style={styleMoreFeatureProfessional} />
              <Price>8 OPQ</Price>
              <ButtonWrapper>
                <Button>CHOOSE PLAN</Button>
              </ButtonWrapper>
            </FlexCol>
            <FlexCol>
              <Title>Business</Title>
              <Hr />
              <Content>
                A secure, encrypted storage solution for growing businesses.
                Perfect for small teams.
              </Content>
              <MoreFeatures
                onClick={() =>
                  this.setState({
                    moreFeatureBusiness: true
                  })
                }
              >
                <Features src={ICON_LOGO} alt="logo" />
                Show features
              </MoreFeatures>
              <MoreFeatureBusiness style={styleMoreFeatureBusiness} />
              <Price>16 OPQ</Price>
              <ButtonWrapper>
                <Button>CHOOSE PLAN</Button>
              </ButtonWrapper>
            </FlexCol>
          </FlexGrid>
        </ScreenContainer>
      </ThemeProvider>
    );
  }
}

export default SubscriptionSlide;
