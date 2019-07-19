import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { withRouter } from "react-router";

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

const IconArrow = styled.img`
  display: none;
  width: 20px;
  color: white;
  @media only screen and (max-width: ${MOBILE_WIDTH}px) {
    display: inline-block;
    float: right;
  }
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
    padding: 50px;
    font-size: 24px;
    border-top: 0.5px solid white;
    border-bottom: 0.5px solid white;
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
  font-weight: bold;
  justify-content: space-between;
  @media (max-width: ${MOBILE_WIDTH}px) {
    display: block;
  }
`;

const BuySubContainer = styled(SubContainer)`
  justify-content: space-around;
`;

const Footer = ({ history }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Container>
        <BuySubContainer>
          <Column>
            <FooterHeader> Opacity </FooterHeader>
            <Copyright>Opacity © 2019</Copyright>
            <Copyright>
              <div>support@opacity.io</div>
            </Copyright>

            <CopyrightMobile>Opacity © 2019</CopyrightMobile>
            <CopyrightMobile>
              <div>support@opacity.io</div>
            </CopyrightMobile>
          </Column>
          <Column>
            <FooterHeader> Company </FooterHeader>
            <div>
              <Link onClick={() => history.push("/terms-of-service")}>
                Terms of Service
              </Link>
            </div>
            <div>
              <Link onClick={() => history.push("/privacy-policy")}>
                Privacy Policy
              </Link>
            </div>
            <div>
              <Link onClick={() => history.push("/code-review-license")}>
                Open Source
              </Link>
            </div>
          </Column>
          <Column>
            <FooterHeader> Social </FooterHeader>
            <div>
              <Link href="https://github.com/opacity" target="_blank">
                Github <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link href="https://telegram.me/opacitystorage" target="_blank">
                Telegram <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link href="https://www.reddit.com/r/Opacity/" target="_blank">
                Reddit <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/Opacity_Storage" target="_blank">
                Twitter <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link
                href="http://www.youtube.com/c/OpacityStorage"
                target="_blank"
              >
                YouTube <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link href="https://medium.com/opacity-storage" target="_blank">
                Medium <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
          </Column>
          <Column>
            <FooterHeader> Learn </FooterHeader>
            <div>
              <Link
                href="https://medium.com/opacity-storage/new-to-opq-heres-how-to-get-it-8285819698e"
                target="_blank"
              >
                How to get OPQ <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.youtube.com/watch?v=J-o6pW8uUtg"
                target="_blank"
              >
                What is OPQ? <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
            <div>
              <Link
                href="https://opacity.io/share#handle=cffea1e29b305cffa52beb8c72abf878473298585fb8cb81c02eea01d07178514eb695c10a4bb1328eaf99926aba133b9b4e4f34ff42a7868707f30a6f9405a8"
                target="_blank"
              >
                White Paper <IconArrow src={ICON_ARROW_RIGHT} />
              </Link>
            </div>
          </Column>
        </BuySubContainer>
      </Container>
    </Wrapper>
  </ThemeProvider>
);

export default withRouter(Footer);
