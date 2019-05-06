import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import "../../root.css";

import {
  theme,
  HEADER_MOBILE_WIDTH,
  HEADER_LANDING_PAGE,
  HEADER_SCREEEN_CONTAINER,
  HEADER_TEAM_PAGE,
  AUTHENTICATION_STATUSES
} from "../../../config";

import Button from "../generic/button";

const ICON_LOGO = require("../../../assets/images/logo.svg");
const ICON_HAMBURGER = require("../../../assets/images/hamburger.svg");
const ICON_CLOSE = require("../../../assets/images/close.svg");

const Container = styled.div<{ menuOpen: boolean }>`
  background: ${props => props.theme.header.background};
  padding: 17px 32px;
  position: ${props => (props.menuOpen ? "fixed" : "static")};
  top: 0;
  left: 0;
  right: 0;
`;

const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  height: 100%;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const LinkContainer = styled.div`
  align-items: center;
  display: flex;
  @media only screen and (max-width: ${HEADER_MOBILE_WIDTH}px) {
    flex-direction: column;
    align-items: baseline;
    padding-left: 15px;
  }
`;

const DesktopNavigation = styled.div`
  margin-top: 5px;
  @media only screen and (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const MobileNavigationContainer = styled.div`
  @media only screen and (min-width: ${HEADER_MOBILE_WIDTH}px) {
    display: none;
  }
`;

const MobileNavigation = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.header.background};
  top: 60px;
  left: 0;
  transition: transform 0.3s cubic-bezier(0, 0.52, 0, 1);
  z-index: 1000;
`;

const Link = styled.a`
  margin-right: 95px;
  align-items: center;
  color: ${props => props.theme.header.color};
  cursor: pointer;
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.4px;
  line-height: normal;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;

const LinkNavigation = styled(Link)`
  @media only screen and (max-width: ${HEADER_MOBILE_WIDTH}px) {
    font-size: 20px;
    margin: 25px;
  }
`;

const Logo = styled.img`
  width: 28px;
  height: 28px;
  margin-right: 10px;
`;

const CompanyName = styled.span`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.7px;
  color: ${props => props.theme.header.color};
`;

const HamburgerIcon = styled.img`
  width: 28px;
  height: 28px;
  display: none;
  @media only screen and (max-width: ${HEADER_MOBILE_WIDTH}px) {
    display: inline-block;
  }
`;

const CloseIcon = styled.img`
  width: 22px;
  height: 22px;
`;

const CommunityWrapper = styled.div``;

const CommunityButton = styled(Button)`
  margin-right: 10px;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    width: 180px;
  }
`;

const CommunityButtonSecondary = styled(CommunityButton)`
  background-color: white;
  color: #2e6dde;
  @media (max-width: ${HEADER_MOBILE_WIDTH}px) {
    margin-top: 30px;
  }
`;

const CommunityLink = styled.a`
  display: inline-block;
`;

const HeaderComponent = ({ authentication, type }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const renderButtons = () => {
    if (authentication === AUTHENTICATION_STATUSES.LOGGED_IN) {
      return (
        <CommunityWrapper>
          <CommunityLink href={"/sign-out"}>
            <CommunityButton>Sign out</CommunityButton>
          </CommunityLink>
        </CommunityWrapper>
      );
    } else {
      return (
        <CommunityWrapper>
          <CommunityLink href={"/sign-up"}>
            <CommunityButtonSecondary>Sign up</CommunityButtonSecondary>
          </CommunityLink>
          <CommunityLink href={"/login"}>
            <CommunityButton>Login</CommunityButton>
          </CommunityLink>
        </CommunityWrapper>
      );
    }
  };

  const renderNavigation = () => {
    if (type === HEADER_LANDING_PAGE) {
      return (
        <LinkContainer>
          <LinkNavigation href={"/stands-out"}>STANDS OUT</LinkNavigation>
          <LinkNavigation href={"/team-page"}>TEAM</LinkNavigation>
          <LinkNavigation
            href={"https://medium.com/opacity-storage/"}
            target="_blank"
          >
            BLOG
          </LinkNavigation>
          {renderButtons()}
        </LinkContainer>
      );
    } else if (type === HEADER_SCREEEN_CONTAINER) {
      return (
        <LinkContainer>
          <LinkNavigation href={"/team-page"}>ABOUT US</LinkNavigation>
          <LinkNavigation
            href={"https://medium.com/opacity-storage/"}
            target="_blank"
          >
            BLOG
          </LinkNavigation>
          {renderButtons()}
        </LinkContainer>
      );
    } else if (type === HEADER_TEAM_PAGE) {
      return (
        <LinkContainer>
          <LinkNavigation href={"/stands-out"}>THE PLATFORM</LinkNavigation>
          <LinkNavigation href={"/team-page"}>TEAM</LinkNavigation>
          <LinkNavigation
            href={"https://medium.com/opacity-storage/"}
            target="_blank"
          >
            BLOG
          </LinkNavigation>
          {renderButtons()}
        </LinkContainer>
      );
    }
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container menuOpen={menuOpen}>
        <Navbar>
          <LogoContainer>
            <Link title="Opacity Storage's Logo" href={"/"}>
              <Logo src={ICON_LOGO} alt="logo" />
              <CompanyName>Opacity</CompanyName>
            </Link>
          </LogoContainer>

          {!menuOpen && (
            <HamburgerIcon
              src={ICON_HAMBURGER}
              alt="navigation"
              onClick={() => setMenuOpen(true)}
            />
          )}
          {menuOpen && (
            <MobileNavigationContainer>
              <CloseIcon
                src={ICON_CLOSE}
                alt="close"
                onClick={() => {
                  setMenuOpen(false);
                }}
              />
              <MobileNavigation>{renderNavigation()}</MobileNavigation>
            </MobileNavigationContainer>
          )}
          <DesktopNavigation>{renderNavigation()}</DesktopNavigation>
        </Navbar>
      </Container>
    </ThemeProvider>
  );
};

export default HeaderComponent;
