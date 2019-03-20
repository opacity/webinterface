import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { MOBILE_WIDTH, theme } from "../../config";
import Subscription from "../shared/subscription";

const ICON_CREDIT = require("../../assets/images/credit.svg");
const ICON_SHARE_FILE = require("../../assets/images/share_file.svg");
const ICON_PAY_CURRENCY = require("../../assets/images/pay_currency.svg");
const ICON_BENEFIT_HANDLE = require("../../assets/images/benefit_handle.svg");
const ICON_BENEFIT_FILES = require("../../assets/images/benefit_files.svg");
const ICON_INFO_OPACITY = require("../../assets/images/info_opacity.svg");
const ICON_INFO_BENEFIT = require("../../assets/images/info_benefit.svg");
const ICON_INFO_PERSONAL = require("../../assets/images/info_personal.svg");
const ICON_INFO_CRYPTOCUREENCY = require("../../assets/images/info_cryptocurrency.svg");

const ContainerWrapper = styled.div``;

const Container = styled.div`
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
`;

const SubscriptionContainer = styled(Container)`
  padding: 60px 0 60px 0;
`;

const Header = styled.div`
  width: auto;
  background-color: #2e6dde;
  padding: 40px 0 70px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 85px 0 85px 0;
  }
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 60px 0 40px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const BenefitSubContainer = styled(SubContainer)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column-reverse;
  }
`;

const BuySubContainer = styled(SubContainer)`
  justify-content: space-around;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: grid;
  }
`;

const Column = styled.div`
  padding-top: 15px;
`;

const Item = styled.div`
  padding-top: 15px;
`;

const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.button.color};
  background-color: #2e6dde;
  border: 1px solid white;
  cursor: pointer;
  margin-right: 10px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 180px;
  }
`;

const ButtonSecondary = styled(Button)`
  background-color: white;
  color: #2e6dde;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 30px;
  }
`;

const ButtonItem = styled(Button)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 250px;
  }
`;

const ButtonBuy = styled(Button)`
  width: 100%;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 250px;
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const ContentWrapper = styled.div`
  width: 470px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 300px;
  }
`;

const ItemButtonWrapper = styled.div`
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
    margin-bottom: 40px;
  }
`;

const Icon = styled.img``;

const BenefitIcon = styled.img`
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const ItemIcon = styled.img`
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const BuyIcon = styled.img`
  width: 200px;
`;

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 24px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 22px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: black;
  text-align: center;
`;

const SubscriptionTitle = styled(HeaderTitle)`
  color: ${props => props.theme.title.color};
  text-align: center;
  font-weight: bold;
`;

const InfoTitle = styled(HeaderTitle)`
  font-size: 18px;
  color: ${props => props.theme.title.color};
  text-align: left;
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
  }
`;

const ItemTitle = styled(HeaderTitle)`
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.title.color};
`;

const InfoHeaderTitle = styled(HeaderTitle)`
  color: ${props => props.theme.title.color};
  text-align: center;
  font-weight: bold;
`;

const BenefitTitle = styled(HeaderTitle)`
  font-size: 18px;
  font-weight: bold;
  color: ${props => props.theme.title.color};
  text-align: left;
  margin: 35px 35px 0 35px;
`;

const Paragraph = styled.p`
  font-weight: 500;
  font-weight: ${props => props.theme.fontWeight};
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: 0.7px;
  color: black;
  text-align: left;
  font-size: 12px;
  margin-inline-end: 10px;
`;

const BenefitContent = styled(Paragraph)`
  margin: 25px 35px 0 35px;
`;

const ItemContent = styled(Paragraph)`
  text-align: center;
  width: 170px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-bottom: 50px;
  }
`;

const Content = styled(Paragraph)`
  font-size: 14px;
  letter-spacing: ${props => props.theme.letterSpacing};
  color: white;
  text-align: center;
  padding-bottom: 40px;
`;

const ContentPurchase = styled(Content)`
  font-weight: bold;
  margin-top: 25px;
`;

const SubscriptionContent = styled(Paragraph)`
  font-size: 14px;
  text-align: center;
  padding-bottom: 10px;
`;

const InfoContent = styled(Paragraph)`
  width: 330px;
  padding-bottom: 10px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: auto;
    width: 250px;
  }
`;

const InfoHeaderContent = styled(Paragraph)`
  text-align: center;
  font-size: 16px;
  width: 680px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 275px;
    font-size: 12px;
  }
`;

const LandingPageSlide = () => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header>
        <Title>Secure. Anonymous. Opaque.</Title>
        <ContentWrapper>
          <Content>
            Zero-knowledge cloud storage at its finest. Opacity offers an
            authentic privacy-centric storage solution where you are in full
            control of your files and who can view them.
          </Content>
        </ContentWrapper>
        <Wrapper>
          <HeaderWrapper>
            <Button>Try for free</Button>
            <ButtonSecondary>Sign up</ButtonSecondary>
          </HeaderWrapper>
        </Wrapper>
        <Wrapper>
          <ContentPurchase>
            Click here to purchase the OPQ token
          </ContentPurchase>
        </Wrapper>
      </Header>
      <Container>
        <SubContainer>
          <Column>
            <Wrapper>
              <Icon src={ICON_CREDIT} />
            </Wrapper>
            <ItemTitle>No Personal Info Required</ItemTitle>
            <ItemContent>
              We will never ask for any personal information. No email, no
              contact, nothing.
            </ItemContent>
          </Column>
          <Column>
            <Wrapper>
              <Icon src={ICON_SHARE_FILE} />
            </Wrapper>
            <ItemTitle>No Personal Info Required</ItemTitle>
            <ItemContent>
              We will never ask for any personal information. No email, no
              contact, nothing.
            </ItemContent>
          </Column>
          <Column>
            <Wrapper>
              <Icon src={ICON_PAY_CURRENCY} />
            </Wrapper>
            <ItemTitle>No Personal Info Required</ItemTitle>
            <ItemContent>
              Using the <b>OPQ token</b>, you can pay for your storage needs
              without ever having to use a credit card.
            </ItemContent>
          </Column>
        </SubContainer>
        <SubContainer>
          <Column>
            <BenefitIcon src={ICON_BENEFIT_FILES} />
          </Column>
          <Column>
            <BenefitTitle>Your Files. Safe and Secure.</BenefitTitle>
            <BenefitContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum nunc in, imperdiet augue. Phasellus
              nisl est, tristique ac magna sed, aliquet faucibus eros. Vivamus
              tempus est eget risus tincidunt cursus. Praesent ac malesuada
              nulla. Curabitur ullamcorper velit urna, id ornare nisl convallis
              sed. Ut non elit tellus. Integer quis felis eget tortor interdum
              vulputate a ac dolor. Nullam tempus nisi ut magna
            </BenefitContent>
          </Column>
        </SubContainer>
        <BenefitSubContainer>
          <Column>
            <BenefitTitle>Your Handle Your Rules.</BenefitTitle>
            <BenefitContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum nunc in, imperdiet augue. Phasellus
              nisl est, tristique ac magna sed, aliquet faucibus eros. Vivamus
              tempus est eget risus tincidunt cursus. Praesent ac malesuada
              nulla. Curabitur ullamcorper velit urna, id ornare nisl convallis
              sed. Ut non elit tellus. Integer quis felis eget tortor interdum
              vulputate a ac dolor. Nullam tempus nisi ut magna
            </BenefitContent>
          </Column>
          <Column>
            <BenefitIcon src={ICON_BENEFIT_HANDLE} />
          </Column>
        </BenefitSubContainer>
      </Container>
      <SubscriptionContainer>
        <SubscriptionTitle>Our Plans</SubscriptionTitle>
        <SubscriptionContent>
          More details for each plan available on our <b>pricing page</b>
        </SubscriptionContent>
        <Subscription />
      </SubscriptionContainer>
      <Container>
        <InfoHeaderTitle>More Info? No Problem.</InfoHeaderTitle>
        <InfoHeaderContent>
          Choosing the right storage solution for your needs is important, and
          we get that. Check some of the links below for more information about
          Opacity, and why it is the right choice for you or your company.
        </InfoHeaderContent>
        <SubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_OPACITY} />
            <InfoTitle>No Personal Info Required</InfoTitle>
            <InfoContent>
              We will never ask for any personal information. No email, no
              contLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem>Learn more</ButtonItem>
            </ItemButtonWrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_BENEFIT} />
            <InfoTitle>No Personal Info Required</InfoTitle>
            <InfoContent>
              We will never ask for any personal information. No email, no
              contLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem>Learn more</ButtonItem>
            </ItemButtonWrapper>
          </Item>
        </SubContainer>
        <SubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_PERSONAL} />
            <InfoTitle>No Personal Info Required</InfoTitle>
            <InfoContent>
              We will never ask for any personal information. No email, no
              contLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem>Learn more</ButtonItem>
            </ItemButtonWrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_CRYPTOCUREENCY} />
            <InfoTitle>No Personal Info Required</InfoTitle>
            <InfoContent>
              We will never ask for any personal information. No email, no
              contLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
              massa vestibulum, vestibulum
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem>Learn more</ButtonItem>
            </ItemButtonWrapper>
          </Item>
        </SubContainer>
      </Container>
      <Container>
        <BuySubContainer>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_BENEFIT_FILES} />
            </Wrapper>

            <ButtonWrapper>
              <ButtonBuy>Buy OPQ on KuCoin</ButtonBuy>
            </ButtonWrapper>
          </Column>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_BENEFIT_FILES} />
            </Wrapper>
            <ButtonWrapper>
              <ButtonBuy>Buy OPQ on COSS</ButtonBuy>
            </ButtonWrapper>
          </Column>
        </BuySubContainer>
      </Container>
    </ContainerWrapper>
  </ThemeProvider>
);

export default LandingPageSlide;
