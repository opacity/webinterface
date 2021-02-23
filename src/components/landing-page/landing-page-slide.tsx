import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";

import {
  HEADER_TYPES,
  MOBILE_WIDTH,
  LANDING_PAGE_MOBILE_WIDTH,
  theme
} from "../../config";
import Footer from "../shared/footer";
import Header from "../shared/header";

const ICON_CREDIT = require("../../assets/images/credit.svg");
const ICON_SHARE_FILE = require("../../assets/images/share_file.svg");
const ICON_PAY_CURRENCY = require("../../assets/images/pay_currency.svg");
const ICON_BENEFIT_HANDLE = require("../../assets/images/benefit_handle.svg");
const ICON_BENEFIT_FILES = require("../../assets/images/benefit_files.svg");
const ICON_INFO_OPACITY = require("../../assets/images/info_opacity.svg");
const ICON_INFO_BENEFIT = require("../../assets/images/info_benefit.svg");
const ICON_INFO_COMMUNITY = require("../../assets/images/info_community.svg");
const ICON_INFO_CRYPTOCURRENCY = require("../../assets/images/info_cryptocurrency.svg");
const ICON_BOMB = require("../../assets/images/XIO.png");
const ICON_FLO = require("../../assets/images/FLO.png");
const ICON_QLC = require("../../assets/images/QLC.png");
const ICON_KUCOIN = require("../../assets/images/kucoin.png");
const ICON_MERCATOX = require("../../assets/images/mercatox.png");

const ContainerWrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
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

const ItemSubContainer = styled(SubContainer)`
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
    display: block;
  }
`;

const BenefitSubContainer = styled(SubContainer)`
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
    flex-direction: column-reverse;
    display: block;
  }
`;

const BuySubContainer = styled(SubContainer)`
  justify-content: space-around;
`;

const PartnerSubContainer = styled(SubContainer)`
  justify-content: space-around;
`;

const Column = styled.div`
  padding-top: 15px;
`;

const Item = styled.div`
  padding-top: 15px;
`;

const InternalLink = styled(Link)`
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const ButtonHeader = styled(InternalLink)`
  width: 200px;
  height: 50px;
  background-color: white;
  color: #2e6dde;
`;

const ButtonItem = styled(InternalLink)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 250px;
  }
`;

const ButtonItemExternal = styled.a.attrs({
  target: "_blank"
})`
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
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border: 1px solid white;
  cursor: pointer;
  margin-bottom: 10px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 250px;
  }
`;

const PartnerLink = styled.a.attrs({
  target: "_blank"
})`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: #2e6dde;
  border: 1px solid white;
  color: ${props => props.theme.button.color};
  cursor: pointer;
  font-size: 16px;
  font-stretch: ${props => props.theme.fontStretch};
  font-style: ${props => props.theme.fontStyle};
  font-weight: bold;
  height: 40px;
  letter-spacing: ${props => props.theme.letterSpacing};
  line-height: ${props => props.theme.lineHeight};
  margin-bottom: 10px;
  margin-top: 40px;
  text-decoration: none;
  width: 200px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 250px;
  }
`;

const PartnerLinkSecondary = styled(PartnerLink)`
  color: ${props => props.theme.button.color};
  background-color: #2e6dde;
  border: 1px solid white;
  width: 200px;
  height: 50px;
  margin-top: 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 30px;
    width: 200px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentWrapper = styled.div`
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 300px;
  }
`;

const ButtonWrapper = styled.div`
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: center;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
  }
`;

const Icon = styled.img``;

const BenefitIcon = styled.img`
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const ItemIcon = styled.img`
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
    width: 100%;
  }
`;

const BuyIcon = styled.img`
  width: 150px;
`;

const PartnerIcon = styled.img`
  width: 150px;
`;

const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;
  margin-bottom: 0px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 20px;
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

const InfoTitle = styled(HeaderTitle)`
  font-size: 18px;
  color: ${props => props.theme.title.color};
  text-align: left;
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
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

const HeaderContent = styled(Content)`
  font-size: 21px;
  padding: 0px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 16px;
  }
`;

const InfoContent = styled(Paragraph)`
  width: 330px;
  padding-bottom: 10px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: auto;
    width: 250px;
  }
`;

const ItemInfoContent = styled(InfoContent)`
  @media (max-width: ${LANDING_PAGE_MOBILE_WIDTH}px) {
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

const LandingPageSlide = ({ history, isLoggedIn }) => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header type={HEADER_TYPES.COMMUNITY_PAGE} isLoggedIn={isLoggedIn} />
      <HeaderContainer>
        <Title>Private Cloud Storage, Powered by Crypto</Title>
        <ContentWrapper>
          <HeaderContent>
            Familiar cloud storage interface built with blockchain technology
            keeps you in full control of your files and who can view them.
          </HeaderContent>
        </ContentWrapper>
        {isLoggedIn ? (
          <Wrapper>
            <ButtonHeader to={"/file-manager"}>Dashboard</ButtonHeader>
          </Wrapper>
        ) : (
          <Wrapper>
            <ButtonHeader to={"/sign-up"}>Explore Plans</ButtonHeader>
            <PartnerLinkSecondary href={"https://www.kucoin.com/trade/OPCT-BTC"}>
              Purchase OPCT
            </PartnerLinkSecondary>
          </Wrapper>
        )}
        <Wrapper />
      </HeaderContainer>
      <Container>
        <BenefitSubContainer>
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
              Using the <b>OPCT token</b>, you can pay for your storage needs
              without ever having to use a credit card.
            </ItemContent>
          </Column>
        </BenefitSubContainer>
        <BenefitSubContainer>
          <Column>
            <BenefitIcon src={ICON_BENEFIT_FILES} />
          </Column>
          <Column>
            <BenefitTitle>Your Files. Safe and Secure.</BenefitTitle>
            <BenefitContent>
              Opacity uses state-of-the-art encryption algorithms to ensure that
              your files are secure. The Opacity platform encrypts your files at
              rest to provide comprehensive protection for your files. As long
              as you protect your Opacity Handle, your data is safe.
            </BenefitContent>
          </Column>
        </BenefitSubContainer>
        <BenefitSubContainer>
          <Column>
            <BenefitTitle>Your Handle, Your Rules.</BenefitTitle>
            <BenefitContent>
              Your unique Opacity Account Handle is the single point of access
              to your storage account. Only you know this Handle, and only you
              have access to your files unless you decide to share the Handle.
              Opacity applies zero-knowledge principles, meaning we do not track
              anything you upload or download. You may also choose to share individual
              files with a unique File Handle that others may use to privately
              download or view files on the Opacity platform.
            </BenefitContent>
          </Column>
          <Column>
            <BenefitIcon src={ICON_BENEFIT_HANDLE} />
          </Column>
        </BenefitSubContainer>
      </Container>
      <Container id="Partners">
        <InfoHeaderTitle>Our Partners</InfoHeaderTitle>
        <PartnerSubContainer>
          <Column>
            <Wrapper>
              <PartnerIcon src={ICON_BOMB} />
            </Wrapper>
            <ButtonWrapper>
              <PartnerLink href={"https://xio.network/startup/opacity/"}>
                Visit XIO
              </PartnerLink>
            </ButtonWrapper>
          </Column>
          <Column>
            <Wrapper>
              <PartnerIcon src={ICON_FLO} />
            </Wrapper>
            <ButtonWrapper>
              <PartnerLink href={"https://flo.cash/"}>Visit FLO</PartnerLink>
            </ButtonWrapper>
          </Column>
          <Column>
            <Wrapper>
              <PartnerIcon src={ICON_QLC} />
            </Wrapper>
            <ButtonWrapper>
              <PartnerLink href={"https://qlcchain.org/"}>
                Visit QLC
              </PartnerLink>
            </ButtonWrapper>
          </Column>
        </PartnerSubContainer>
      </Container>

      <Container>
        <InfoHeaderTitle>More Info? No Problem.</InfoHeaderTitle>
        <InfoHeaderContent>
          Choosing the right private storage solution for your needs is important.
          We understand that. Check some of the links below for more information
          about Opacity and why it is the right choice for you or your company.
        </InfoHeaderContent>
        <ItemSubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_COMMUNITY} />
            <InfoTitle>Apps From the Opacity Community</InfoTitle>
            <ItemInfoContent>
              Our community values privacy. Take a peek at the apps built on
              the Opacity platform.
            </ItemInfoContent>
            <Wrapper>
              <ButtonItem to={"/community-page"}>Learn more</ButtonItem>
            </Wrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_BENEFIT} />
            <InfoTitle>Benefits of Zero-knowledge Cloud Storage</InfoTitle>
            <ItemInfoContent>
              Not many storage providers offer a true, zero-knowledge solution.
              Learn exactly what zero-knowledge means and how it can be of
              benefit to you.
            </ItemInfoContent>
            <Wrapper>
              <ButtonItemExternal href="https://www.cloudwards.net/what-exactly-is-zero-knowledge-in-the-cloud-and-how-does-it-work">
                Learn more
              </ButtonItemExternal>
            </Wrapper>
          </Item>
        </ItemSubContainer>
        <ItemSubContainer>
          <Item>
            <ItemIcon src={ICON_INFO_OPACITY} />
            <InfoTitle>Why Opacity Stands Out</InfoTitle>
            <ItemInfoContent>
              We do things differently than most storage providers. Learn
              exactly what makes us stand out from the competition.
            </ItemInfoContent>
            <Wrapper>
              <ButtonItem to="/stands-out">Learn more</ButtonItem>
            </Wrapper>
          </Item>
          <Item>
            <ItemIcon src={ICON_INFO_CRYPTOCURRENCY} />
            <InfoTitle>New to Cryptocurrency?</InfoTitle>
            <ItemInfoContent>
              Cryptocurrency can be a little confusing, but it doesn’t have to
              be. Take a look at this video to learn how you can get started
              with cryptocurrency.
            </ItemInfoContent>
            <Wrapper>
              <ButtonItemExternal href="https://www.youtube.com/watch?v=6Gu2QMTAkEU">
                Learn more
              </ButtonItemExternal>
            </Wrapper>
          </Item>
        </ItemSubContainer>
      </Container>
      <Container>
        <InfoHeaderTitle>Where to Buy OPCT</InfoHeaderTitle>
        <BuySubContainer>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_KUCOIN} />
            </Wrapper>
            <ButtonWrapper>
              <PartnerLink href={"https://www.kucoin.com/trade/OPCT-BTC"}>
                Buy OPCT on KuCoin
              </PartnerLink>
            </ButtonWrapper>
          </Column>
          <Column>
            <Wrapper>
              <BuyIcon src={ICON_MERCATOX} />
            </Wrapper>
            <ButtonWrapper>
              <PartnerLink href={"https://mercatox.com/exchange/OPCT/BTC"}>
                Buy OPCT on Mercatox
              </PartnerLink>
            </ButtonWrapper>
          </Column>
        </BuySubContainer>
      </Container>
      <Footer />
    </ContainerWrapper>
  </ThemeProvider>
);

export default withRouter(LandingPageSlide);
