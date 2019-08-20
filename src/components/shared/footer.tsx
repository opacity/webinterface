import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme, MOBILE_WIDTH } from "../../config";

const ICON_ARROW_RIGHT = require("../../assets/images/arrow_right.svg");

const Container = styled.div`
  max-width: 700px;
  margin: auto;
  width: auto;
`;

const Column = styled.div`
  padding-top: 15px;
`;

const Wrapper = styled.div`
  background-color: #2e6dde;
  padding-bottom: 20px;
`;

const Link = styled.a`
  align-items: center;
  color: white;
  cursor: pointer;
  font-size: 14px;
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
    font-size: 24px;
    border-top: 0.5px;
    border-bottom: 0.5px;
    margin: 5px 0px 0px 50px;
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
    font-size: 16px;
    border-top: 0.5px;
    border-bottom: 0.5px;
    margin: 5px 0px 0px 50px;
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

const FooterHeader = styled.div`
  display: flex;
  color: white;
  margin-bottom: 15px;
  margin-left: 50px;
  font-weight: bold;
  justify-content: space-between;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const BuySubContainer = styled(SubContainer)`
  justify-content: space-around;
`;

const IconArrow = styled.img.attrs({
  src: ICON_ARROW_RIGHT
})`
  display: none;
  width: 20px;
  color: white;
  margin-right: 10px;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-block;
  }
`;

const Block = styled.div`
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Container>
        <BuySubContainer>
          <Column>
            <FooterHeader>Opacity</FooterHeader>
            <Block>
              <Copyright>Opacity © 2019</Copyright>
            </Block>
            <Block>
              <Copyright>support@opacity.io</Copyright>
            </Block>
          </Column>
          <Column>
            <FooterHeader>Company</FooterHeader>
            <Block>
              <Link href="/terms-of-service">Terms of Service</Link>
            </Block>
            <Block>
              <Link href="/privacy-policy">Privacy Policy</Link>{" "}
            </Block>
            <Block>
              <Link href="/code-review-license">Open Source</Link>
            </Block>
          </Column>
          <Column>
            <FooterHeader>Social</FooterHeader>
            <Block>
              <Link href="https://github.com/opacity" target="_blank">
                Github
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link href="https://telegram.me/opacitystorage" target="_blank">
                Telegram
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link href="https://www.reddit.com/r/Opacity/" target="_blank">
                Reddit
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link href="https://twitter.com/Opacity_Storage" target="_blank">
                Twitter
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link
                href="http://www.youtube.com/c/OpacityStorage"
                target="_blank"
              >
                YouTube
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link href="https://medium.com/opacity-storage" target="_blank">
                Medium
              </Link>
              <IconArrow />
            </Block>
          </Column>
          <Column>
            <FooterHeader>Learn</FooterHeader>
            <Block>
              <Link
                href="https://www.youtube.com/watch?v=J-o6pW8uUtg"
                target="_blank"
              >
                What is OPQ?
              </Link>
              <IconArrow />
            </Block>
            <Block>
              <Link
                href="https://medium.com/opacity-storage/new-to-opq-heres-how-to-get-it-8285819698e"
                target="_blank"
              >
                How to get OPQ
              </Link>
              <IconArrow />
            </Block>
          </Column>
        </BuySubContainer>
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default Footer;
