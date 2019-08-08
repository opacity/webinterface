import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH } from "../../config";

const ICON_GITHUB = require("../../assets/images/github.svg");
const ICON_TELEGRAM = require("../../assets/images/telegram.svg");
const ICON_REDDIT = require("../../assets/images/reddit.svg");
const ICON_TWITTER = require("../../assets/images/twitter.svg");
const ICON_YOUTUBE = require("../../assets/images/youtube.svg");

const ICON_ARROW_RIGHT = require("../../assets/images/arrow_right.svg");

const Container = styled.div`
  max-width: 950px;
  margin: auto;
`;

const Wrapper = styled.div`
  background-color: #2e6dde;
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 27.5% 15% 15% 15% 27.5%;
  padding: 90px 10px 0px 0px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    grid-template-columns: 100%;
    padding: 0px;
  }
`;
const IconContainer = styled.div`
  display: contents;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
  }
  @media only screen and (max-width: 440px) {
    grid-template-columns: 100%;
  }
`;

const FooterCopyright = styled(FooterLinks)`
  grid-template-columns: 25% 25% 25%;
  padding: 90px 10px 90px 0px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    grid-template-columns: 100%;
    padding: 0px;
    a {
      border: none;
    }
  }
`;

const FooterIcons = styled(FooterLinks)`
  grid-template-columns: 33% 9.6% 9.6% 9.6% 9.6% 9.6%;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 0px;
    display: block;
  }
`;

const Link = styled.a`
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 50px;
    font-size: 24px;
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
  }
`;

const LinkTerms = styled(Link)`
  font-size: 14px;
  border: none;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 27px 0px 0px 40px;
  }
`;

const LinkIcon = styled(Link)`
  border: none;
  @media only screen and (max-width: 440px) {
    text-align: center;
    padding: 20px 0;
  }
`;

const LinkButton = styled.a`
  width: 180px;
  height: 34px;
  padding-top: 14px;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;
  border-color: white;
  border-width: 2px;
  border-style: solid;
  border-radius: 2.4px;
  box-shadow: 0 1px 3px 0 rgba(41, 44, 51, 0.16),
    0 1px 3px 0 rgba(41, 44, 51, 0.23);
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    width: 80%;
    margin: auto;
    margin-top: 50px;
    display: block;
  }
`;

const Icon = styled.img`
  width: 50px;
`;

const IconArrow = styled.img`
  display: none;
  width: 20px;
  color: white;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-block;
    float: right;
  }
`;

const Copyright = styled.span`
  opacity: 0.85;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: white;

  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    padding: 27px 0px 40px 40px
    display: none;
    font-size: 12px;
  }
`;

const CopyrightMobile = styled(Copyright)`
  display: none;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const Footer = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Container>
        <FooterLinks>
          <Link href="https://opacity.io" target="_blank">
            Opacity Storage <IconArrow src={ICON_ARROW_RIGHT} />
          </Link>
          <Link href="/stands-out">
            The Platform <IconArrow src={ICON_ARROW_RIGHT} />
          </Link>
          <Link href="/team-page">
            Team <IconArrow src={ICON_ARROW_RIGHT} />
          </Link>
          <Link href="https://medium.com/opacity-storage/" target="_blank">
            Blog <IconArrow src={ICON_ARROW_RIGHT} />
          </Link>
          <Link href=" https://www.kucoin.com/trade/OPQ-BTC" target="_blank">
            Buy OPQ <IconArrow src={ICON_ARROW_RIGHT} />
          </Link>
        </FooterLinks>
        <FooterIcons>
          <LinkButton href="https://telegram.me/opacitystorage" target="_blank">
            Contact Us
          </LinkButton>
          <IconContainer>
            <LinkIcon href="https://github.com/opacity" target="_blank">
              <Icon src={ICON_GITHUB} />
            </LinkIcon>
            <LinkIcon href="https://telegram.me/opacitystorage" target="_blank">
              <Icon src={ICON_TELEGRAM} />
            </LinkIcon>
            <LinkIcon href="https://www.reddit.com/r/Opacity/" target="_blank">
              <Icon src={ICON_REDDIT} />
            </LinkIcon>
            <LinkIcon
              href="https://twitter.com/Opacity_Storage"
              target="_blank"
            >
              <Icon src={ICON_TWITTER} />
            </LinkIcon>
            <LinkIcon
              href="http://www.youtube.com/c/OpacityStorage"
              target="_blank"
            >
              <Icon src={ICON_YOUTUBE} />
            </LinkIcon>
          </IconContainer>
        </FooterIcons>
        <FooterCopyright>
          <Copyright>Opacity © 2019</Copyright>
          <LinkTerms href="/terms-of-service">Terms of Service</LinkTerms>
          <LinkTerms href="/privacy-policy">Privacy Policy</LinkTerms>
          <CopyrightMobile>Opacity © 2019</CopyrightMobile>
        </FooterCopyright>
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default Footer;
