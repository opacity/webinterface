import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

import { HEADER_TEAM_PAGE, MOBILE_WIDTH, theme } from "../../config";
import Subscription from "../shared/subscription";
import Footer from "../shared/footer";
import Header from "../shared/header";

const ICON_CREDIT = require("../../assets/images/credit.svg");
const ICON_SHARE_FILE = require("../../assets/images/share_file.svg");
const ICON_PAY_CURRENCY = require("../../assets/images/pay_currency.svg");
const ICON_BENEFIT_HANDLE = require("../../assets/images/benefit_handle.svg");
const ICON_BENEFIT_FILES = require("../../assets/images/benefit_files.svg");
const ICON_INFO_OPACITY = require("../../assets/images/info_opacity.svg");
const ICON_INFO_BENEFIT = require("../../assets/images/info_benefit.svg");
const ICON_INFO_PERSONAL = require("../../assets/images/info_personal.svg");
const ICON_INFO_CRYPTOCURRENCY = require("../../assets/images/info_cryptocurrency.svg");
const ICON_KUCOIN = require("../../assets/images/kucoin.png");
const ICON_COSSIO = require("../../assets/images/cossio.png");
const BACKGROUND_BUBBLES = require("../../assets/images/bubbles.svg");

const ContainerWrapper = styled.div``;

const Container = styled.div`
  height: 100%;
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
`;

const SubscriptionContainerImage = styled.div`
  background-image: url(${BACKGROUND_BUBBLES});
  background-repeat: round;
`;

const SubscriptionContainer = styled(Container)`
  padding: 60px 0 60px 0;
  background-color: transparent;
`;

const HeaderContainer = styled.div`
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

const CoinMarketCapWrapper = styled.div`
  width: 300px;
  padding-top: 80px;
  margin: auto;
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
  margin-top: 40px;
  width: 200px;
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
  width: 150px;
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
  color: #4f5e78;
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
  color: #4f5e78;
  text-align: left;
  font-size: 14px;
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

const ContentPurchase = styled.a`
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  font-size: 28px;
  color: white;
  text-align: center;
  padding-bottom: 40px;
  text-decoration: none;
  display: block;
`;
const LandingPageSlide = ({ history }) => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header type={HEADER_TEAM_PAGE} />
      <HeaderContainer>
        <Title>Secure. Anonymous. Opaque.</Title>
        <ContentWrapper>
          <Content>
            Zero-knowledge cloud storage at its finest. Opacity offers an
            authentic privacy-centric storage solution where you are in full
            control of your files and who can view them.
          </Content>
        </ContentWrapper>
        <Wrapper>
          <HeaderWrapper />
        </Wrapper>
        <Wrapper>
          <ContentPurchase href="http://twitter.com/opacity_storage">
            Opacity 1.0 Coming May 2019
          </ContentPurchase>
          <ButtonSecondary
            onClick={() =>
              (location.href = "http://twitter.com/opacity_storage")
            }
          >
            Stay Informed
          </ButtonSecondary>
        </Wrapper>
      </HeaderContainer>
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
            <ItemTitle>Share Files Your Way</ItemTitle>
            <ItemContent>
              You control who can view your files. By default, you and only you
              even know these files exist.
            </ItemContent>
          </Column>
          <Column>
            <Wrapper>
              <Icon src={ICON_PAY_CURRENCY} />
            </Wrapper>
            <ItemTitle>Pay Using Cryptocurrency</ItemTitle>
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
              Opacity uses state-of-the-art encryption algorithms to ensure that
              your files are secure. The Opacity platform encrypts your files at
              rest to provide comprehesive protection for your files. As long as
              you protect your Opacity Handle, your data is safe.
            </BenefitContent>
          </Column>
        </SubContainer>
        <BenefitSubContainer>
          <Column>
            <BenefitTitle>Your Handle Your Rules.</BenefitTitle>
            <BenefitContent>
              Your unique Opacity Account Handle is the single point of access
              to your storage account. Only you know this handle, and only you
              have access to your files unless you decide to share the handle.
              Opacity applies zero-knowledge principles, meaning we do not track
              anything you upload or download. You may also choose individual
              files to share with a unique file handle that others may use to
              view shared files on the Opacity platform.
            </BenefitContent>
          </Column>
          <Column>
            <BenefitIcon src={ICON_BENEFIT_HANDLE} />
          </Column>
        </BenefitSubContainer>
      </Container>
      <SubscriptionContainerImage>
        <SubscriptionContainer>
          <SubscriptionTitle>Our Plans</SubscriptionTitle>
          <Subscription />
        </SubscriptionContainer>
      </SubscriptionContainerImage>
      <Container>
        <InfoHeaderTitle>More Info? No Problem.</InfoHeaderTitle>
        <InfoHeaderContent>
          Choosing the right storage solution for your needs is important, and
          we get that. Check some of the links below for more information about
          Opacity, and why it is the right choice for you or your company.
        </InfoHeaderContent>
        <SubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_PERSONAL} />
            <InfoTitle>The Brains Behind Opacity</InfoTitle>
            <InfoContent>
              We are a group of privacy enthusiasts looking to build a true
              zero-knowledge storage solution. Take a peek at the team behind
              the Opacity platform.
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem onClick={() => history.push("/team-page")}>
                Learn more
              </ButtonItem>
            </ItemButtonWrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_BENEFIT} />
            <InfoTitle>Benefits of Zero-knowledge Cloud Storage</InfoTitle>
            <InfoContent>
              Not many storeage providers offer a true, zero-knowledge solution.
              Learn exactly what zero-knowledge means and how it can be of
              benefit to you.
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem
                onClick={() =>
                  window.open(
                    "https://www.cloudwards.net/what-exactly-is-zero-knowledge-in-the-cloud-and-how-does-it-work",
                    "_blank"
                  )
                }
              >
                Learn more
              </ButtonItem>
            </ItemButtonWrapper>
          </Item>
        </SubContainer>
        <SubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_OPACITY} />
            <InfoTitle>Why Opacity Stands Out</InfoTitle>
            <InfoContent>
              We do things differently than most sotrage providers. Learn
              exactly what makes us stand out from the competition.
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem onClick={() => history.push("/stands-out")}>
                Learn more
              </ButtonItem>
            </ItemButtonWrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_CRYPTOCURRENCY} />
            <InfoTitle>New to Cryptocurrency?</InfoTitle>
            <InfoContent>
              Cryptocurrency can be a little confusing, but it doesn’t have to
              be. Take a look at this video to learn how you can get started
              with cryptocurrency.
            </InfoContent>
            <ItemButtonWrapper>
              <ButtonItem
                onClick={() =>
                  window.open(
                    "https://www.youtube.com/watch?v=6Gu2QMTAkEU",
                    "_blank"
                  )
                }
              >
                Learn more
              </ButtonItem>
            </ItemButtonWrapper>
          </Item>
        </SubContainer>
      </Container>
      <Container id="buyOPQ">
        <InfoHeaderTitle>Where to Buy OPQ</InfoHeaderTitle>
        <BuySubContainer>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_KUCOIN} />
            </Wrapper>
            <ButtonWrapper>
              <ButtonBuy
                onClick={() =>
                  window.open("https://www.kucoin.com/trade/OPQ-ETH", "_blank")
                }
              >
                Buy OPQ on KuCoin
              </ButtonBuy>
            </ButtonWrapper>
          </Column>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_COSSIO} />
            </Wrapper>
            <ButtonWrapper>
              <ButtonBuy
                onClick={() =>
                  window.open("https://coss.io/c/trade?s=OPQ_ETH", "_blank")
                }
              >
                Buy OPQ on COSS
              </ButtonBuy>
            </ButtonWrapper>
          </Column>
        </BuySubContainer>
      </Container>
      <Container>
        <CoinMarketCapWrapper>
          <div
            className="coinmarketcap-currency-widget"
            data-currencyid="3632"
            data-base="USD"
            data-secondary="BTC"
            data-ticker="true"
            data-rank="true"
            data-marketcap="true"
            data-volume="true"
            data-stats="USD"
            data-statsticker="false"
          />
        </CoinMarketCapWrapper>
      </Container>
      <Footer />
    </ContainerWrapper>
  </ThemeProvider>
);

export default withRouter(LandingPageSlide);
