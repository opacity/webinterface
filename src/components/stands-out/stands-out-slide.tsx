import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import {
  HEADER_TYPES,
  MOBILE_WIDTH,
  STANDS_OUT_TABLET_WIDTH,
  STANDS_OUT_DESKTOP_WIDTH,
  theme
} from "../../config";

import Header from "../shared/header";
import Footer from "../shared/footer";
import OutboundLink from "../shared/outbound-link";
// import InsideLink from "../shared/inside-link";
import Button from "../shared/generic/button";

const ICON_INTRO = require("../../assets/images/so_intro.svg");
const ICON_ACCESS_ACCOUNT = require("../../assets/images/so_access_account.svg");
const ICON_ENCRYPTED = require("../../assets/images/so_encrypted.svg");
const ICON_TRANSPARENT_BASE = require("../../assets/images/so_transparent_base.svg");
const ICON_EXPLORE_CODE = require("../../assets/images/so_explore_code.svg");
const ICON_LASTPASS = require("../../assets/images/last_pass.png");
const ICON_1PASSWORD = require("../../assets/images/1password.png");
const ICON_KEEPASS = require("../../assets/images/kee_pass.png");

const ContainerWrapper = styled.div`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 35px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  text-align: center;
  margin-top: 100px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    text-align: left;
    font-size: 23px;
    padding: 0 40px;
  }
`;

const HeaderTitle = styled.h2`
  font-size: 22px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  color: ${props => props.theme.title.color};
  text-align: center;
  margin-bottom: 20px;
`;

const TelegramLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 20px 0;
`;

const TitleFunction = styled(HeaderTitle)`
  font-size: 18px;
  padding: 52px 20px 26px 50px;
  text-align: left;
  @media (max-width: ${MOBILE_WIDTH}px) {
    font-size: 22px;
    text-align: left;
    margin: 40px 20px 26px 40px;
  }
  @media (max-width: 300px) {
    margin: 0px;
  }
`;

const RecommendTitle = styled(HeaderTitle)`
  font-size: 18px;
  margin-bottom: 20px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    padding: 0 40px;
    font-size: 22px;
  }
`;

const CommunityTitle = styled(HeaderTitle)`
  margin-top: 80px;
`;

const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: ${props => props.theme.letterSpacing};
  color: #4f5e78;
  text-align: center;
`;

const InfoContent = styled(Paragraph)`
  text-align: left;
  color: #5c6a82;
  margin: 30px 0;
  width: 400px;
  @media (max-width: ${STANDS_OUT_TABLET_WIDTH}px) {
    width: auto;
    height: auto;
    padding: 0 25px;
    width: auto;
    text-align: center;
  }
`;

const FunctionContent = styled(InfoContent)`
  font-size: 14px;
  margin: 0 50px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    margin: 0px;
  }
`;

const Content = styled(Paragraph)`
  font-size: 14px;
`;

const Container = styled.div`
  max-width: 950px;
  margin: auto;
  background-color: ${props => props.theme.background};
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 85px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
    margin: 0 0 55px 0;
  }
`;

const FunctionSubContainer = styled(SubContainer)`
  @media (max-width: ${STANDS_OUT_DESKTOP_WIDTH}px) {
    display: block;
  }
`;

const InfoSubContainer = styled(SubContainer)`
  @media (max-width: ${STANDS_OUT_TABLET_WIDTH}px) {
    display: block;
  }
`;

const PasswordManager = styled(SubContainer)`
  margin: 50px 0 50px 0;
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin: 50px 0 50px 0;
  }
`;

const Column = styled.div`
  padding-top: 15px;
`;

const ColumnPasswordManager = styled(Column)`
  height: 200px;
  width: 200px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
    text-align: center;
    margin: auto;
  }
`;

const Community = styled.div`
  width: auto;
  background-color: #e0edff;
  padding: 15px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    height: auto;
    padding-bottom: 25px;
  }
`;

const CommunityLinkWrapper = styled.div`
  padding-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MOBILE_WIDTH}px) {
    flex-direction: column;
  }
`;

const ContentWrapper = styled.div`
  width: 450px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    padding: 0 25px;
  }
`;

const RecommendContentWrapper = styled.div`
  width: 400px;
  margin: auto;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
  }
`;

const IconWrapper = styled.div`
  width: 550px;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 180px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: auto;
    margin-bottom: 80px;
  }
`;

const StandsOutButton = styled(Button)`
  width: 220px;
  margin: auto;
  text-align: center;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: -webkit-fill-available;
    margin: 0 25px;
  }
`;

const CommunityLink = styled(Link)`
  background-color: #2e6dde;
  color: ${props => props.theme.button.color};
  border-radius: 0px;
  cursor: pointer;
  outline: none;
  padding: 0px;
  font-size: 16px;
  font-weight: bold;
  font-style: ${props => props.theme.fontStyle};
  font-stretch: ${props => props.theme.fontStretch};
  line-height: ${props => props.theme.lineHeight};
  letter-spacing: ${props => props.theme.letterSpacing};
  margin: 0 10px;
  padding: 15px 50px;
  text-decoration: none;
  width: 75px;
  text-align: center;
`;

const CommunityLinkSecondary = styled(CommunityLink)`
  @media (max-width: ${MOBILE_WIDTH}px) {
    margin-top: 30px;
  }
`;

const Icon = styled.img`
  height: 300px;
  width: 550px;
  @media (max-width: ${MOBILE_WIDTH}px) {
    width: 100%;
    height: auto;
  }
`;

const FunctionIcon = styled.img`
  width: 475px;
  @media (max-width: ${STANDS_OUT_DESKTOP_WIDTH}px) {
    display: none;
  }
`;

const FunctionIconMobile = styled(FunctionIcon)`
  display: none;
  @media (max-width: ${STANDS_OUT_DESKTOP_WIDTH}px) {
    width: 100%;
    height: auto;
    display: block;
    margin: 25px 0;
  }
`;

const IconPasswordManager = styled.img`
  height: 150px;
  width: 150px;
  cursor: pointer;
`;

const InfoIcon = styled.img`
  width: 400px;
  height: 160px;
  margin-top: 60px;
  @media (max-width: ${STANDS_OUT_TABLET_WIDTH}px) {
    width: 100%;
    height: auto;
    margin-top: 30px;
  }
`;

const SubscriptionSlide = ({ history, isLoggedIn }) => (
  <ThemeProvider theme={theme}>
    <ContainerWrapper>
      <Header type={HEADER_TYPES.TEAM_PAGE} isLoggedIn={isLoggedIn} />
      <Container>
        <Title>With Opacity, You’re in Full Control</Title>
        <ContentWrapper>
          <Paragraph>
            Unlike other storage solutions, Opacity relies on client-side
            encryption to ensure that you, and only you have access to your
            files. Our backend services keep zero knowledge regarding your file
            uploads.
          </Paragraph>
        </ContentWrapper>
        <IconWrapper>
          <Icon src={ICON_INTRO} />
        </IconWrapper>
      </Container>
      <Container>
        <FunctionSubContainer>
          <Column>
            <FunctionIcon src={ICON_ACCESS_ACCOUNT} />
          </Column>
          <Column>
            <TitleFunction>One Handle To Access Your Account.</TitleFunction>
            <FunctionIconMobile src={ICON_ACCESS_ACCOUNT} />
            <FunctionContent>
              When you sign up with Opacity, a unique Account Handle is created
              just for you. This Handle is all that is required to access your
              storage account. By default, you are the only person with this
              information, so it is important that you record your Account
              Handle to avoid trouble accessing your account. Keep it safe!
            </FunctionContent>
          </Column>
        </FunctionSubContainer>
        <FunctionSubContainer>
          <Column>
            <TitleFunction>
              Encrypted At Rest. Share Only What You Want.
            </TitleFunction>
            <FunctionIconMobile src={ICON_ENCRYPTED} />
            <FunctionContent>
              The key to unlocking your files is generated client-side - not
              even Opacity can access your files! When you want to share a file
              with a friend, you can easily generate a shareable link with a
              single button click. Only people with that link can access your
              file, giving you granular control over who has access to your
              data.
            </FunctionContent>
          </Column>
          <Column>
            <FunctionIcon src={ICON_ENCRYPTED} />
          </Column>
        </FunctionSubContainer>
      </Container>
      <Container>
        <RecommendTitle>Password Manager Recommended</RecommendTitle>
        <RecommendContentWrapper>
          <Content>
            We understand the need for privacy. That’s why our architecture
            ensures only you control access to your personal data. However, this
            level of account privacy means that Opacity does not retain any
            record of your account information, including the Account Handle and
            pin used to create and access your account.
          </Content>
          <Content>
            To avoid any potential loss of access, we recommend using a password
            manager to safely store your Opacity credentials. Check out some of
            the solutions below:
          </Content>
        </RecommendContentWrapper>
        <PasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_LASTPASS}
              onClick={() => window.open("https://www.lastpass.com/", "_blank")}
            />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_1PASSWORD}
              onClick={() => window.open("https://1password.com/", "_blank")}
            />
          </ColumnPasswordManager>
          <ColumnPasswordManager>
            <IconPasswordManager
              src={ICON_KEEPASS}
              onClick={() => window.open("https://keepass.info/", "_blank")}
            />
          </ColumnPasswordManager>
        </PasswordManager>
      </Container>
      <Container>
        <HeaderTitle>Transparent Code Base</HeaderTitle>
        <InfoSubContainer>
          <Column>
            <InfoIcon src={ICON_TRANSPARENT_BASE} />
            <InfoContent>
              Wondering how things work? Take a peek under the hood! All of
              Opacity’s codebase is completely open source for anyone wondering
              how our system works.
            </InfoContent>
            <StandsOutButton
              onClick={() =>
                window.open("https://github.com/opacity", "_blank")
              }
            >
              Explore our code
            </StandsOutButton>
          </Column>
          <Column>
            <InfoIcon src={ICON_EXPLORE_CODE} />
            <InfoContent>
              Want an overview of Opacity, its current architecture, and where
              we want to go in the future? Check out the Opacity Whitepaper!
              Current version: 1.0
            </InfoContent>
            <StandsOutButton
           onClick={() =>
             window.open("https://opacity.io/share#handle=cffea1e29b305cffa52beb8c72abf878473298585fb8cb81c02eea01d07178514eb695c10a4bb1328eaf99926aba133b9b4e4f34ff42a7868707f30a6f9405a8", "_blank")
           }
         >
         Download Whitepaper
       </StandsOutButton>
          </Column>
        </InfoSubContainer>
      </Container>
      <Community>
        <CommunityTitle>
          Are you ready to join our thriving community?
        </CommunityTitle>
        <TelegramLinkContainer>
          <OutboundLink href="https://t.me/opacitystorage">
            Join us on Telegram
          </OutboundLink>
        </TelegramLinkContainer>
        <CommunityLinkWrapper>
          <CommunityLink to="/sign-up">Sign up</CommunityLink>
          <CommunityLinkSecondary to="/login">Login</CommunityLinkSecondary>
        </CommunityLinkWrapper>
      </Community>
      <Footer />
    </ContainerWrapper>
  </ThemeProvider>
);

export default withRouter(SubscriptionSlide);
